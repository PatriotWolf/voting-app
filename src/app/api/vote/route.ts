import { NextResponse } from 'next/server';

import { db } from 'lib/db';
import { CreatePollSchema } from 'schemas';

import { auth } from 'utils/auth';

export async function GET(request: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json('Unauthorized', { status: 404 });
  }

  const { searchParams } = new URL(request.url);
  const cursor = searchParams.get('cursor');
  const hasNextCursor = cursor != null;

  try {
    const polls = await db.poll.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        id: 'desc',
      },
      cursor: hasNextCursor ? { id: cursor } : undefined,
      skip: hasNextCursor ? 1 : 0,
      take: 10,
    });

    let nextCursor = null;
    if (polls.length > 0) {
      nextCursor = polls[polls.length - 1].id;
    }

    return NextResponse.json({
      polls,
      nextCursor,
    });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json('Unauthorized', { status: 401 });
  }
  console.log(session.user);
  const { title, description, options, endDate } = await request.json();
  const { success } = CreatePollSchema.safeParse({
    title,
    description,
    options,
    endDate,
  });

  if (success === false) {
    return NextResponse.json('Bad request', { status: 400 });
  }

  try {
    const { id } = await db.poll.create({
      data: {
        title,
        description,
        userId: session.user.id,
        endsAt: endDate,

        options: {
          create: options,
        },
      },
    });

    return NextResponse.json({ message: 'Poll created ', id }, { status: 201 });
  } catch (error) {
    return NextResponse.json('Internal Server Error', { status: 505 });
  }
}
