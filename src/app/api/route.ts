import { NextResponse } from 'next/server';

import { isAuthAdmin } from 'lib/auth';

export async function GET() {
  const role = await isAuthAdmin();

  if (role) {
    return new NextResponse(null, { status: 200 });
  }

  return new NextResponse(null, { status: 403 });
}
