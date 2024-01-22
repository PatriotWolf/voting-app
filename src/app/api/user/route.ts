import { NextRequest, NextResponse } from 'next/server';

import bcrypt from 'bcrypt';
import { db } from 'lib/db';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const userFound = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFound) {
      return NextResponse.json(
        {
          message: 'Email already exists',
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await db.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    });

    const { password: _, ...user } = newUser;

    return NextResponse.json(user);
  } catch (error: any) {
    console.log('[USERS_POST]', error);
    return new NextResponse('Initial error', { status: 500 });
  }
}
