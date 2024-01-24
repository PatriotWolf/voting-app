import { NextResponse } from 'next/server';

import { db } from 'lib/db';
import { UpdatePollSchema } from 'schemas';

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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();

  if (!session) {
    return NextResponse.json('Unauthorized', { status: 401 });
  }

  const pollId = params.id;
  const { title, description, oldOptions, deleteOptions, options, endDate } =
    await request.json();
  const { success } = UpdatePollSchema.safeParse({
    title,
    description,
    oldOptions,
    deleteOptions,
    options,
    endDate,
  });

  if (success === false) {
    return NextResponse.json('Bad request', { status: 400 });
  }

  try {
    const transaction = await db.$transaction(
      oldOptions.map((option: { optionId: string; text: string }) =>
        db.pollOption.update({
          where: { id: option.optionId },
          data: { text: option.text },
        })
      )
    );
    const { id } = await db.poll.update({
      where: {
        id: pollId,
      },
      include: {
        options: true,
      },
      data: {
        title,
        description,
        userId: session.user.id,
        endsAt: endDate,
        options: {
          create: options,
          deleteMany: deleteOptions.map(
            (option: { optionId: string; text: string }) => ({
              id: option.optionId,
            })
          ),
        },
      },
    });

    return NextResponse.json({ message: 'Poll Updated ', id }, { status: 201 });
  } catch (error) {
    return NextResponse.json('Internal Server Error', { status: 505 });
  }
}
