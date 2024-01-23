import { NextResponse } from 'next/server';

import { db } from 'lib/db';

import { auth } from 'utils/auth';

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();

  if (!session) {
    return NextResponse.json('Unauthorized', { status: 401 });
  }

  const pollId = params.id;

  try {
    const poll = await db.poll.findUnique({
      where: {
        id: pollId,
      },
    });

    if (poll == null) {
      return NextResponse.json('Poll not found', { status: 404 });
    }

    const isPollAuthor = poll.userId === session.user.id;

    if (!isPollAuthor) {
      return NextResponse.json('Unauthorized', { status: 401 });
    }

    await db.poll.delete({
      where: {
        id: pollId,
      },
    });

    return NextResponse.json('Poll deleted', { status: 200 });
  } catch (error) {
    return NextResponse.json('Internal Server Error', { status: 505 });
  }
}
