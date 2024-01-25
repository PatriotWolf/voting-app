const { PrismaClient, UserRole } = require('@prisma/client');
const { users, votes } = require('./data');

class SeedSingleton {
  constructor(prisma, isInternalClient) {
    this.isInternalClient = isInternalClient;
    this.prisma = prisma;

    SeedSingleton.instance = this;
  }
  static getInstance(prisma = null) {
    if (!SeedSingleton.instance) {
      const isInternalClient = !prisma;
      const prismaClient = isInternalClient ? new PrismaClient() : prisma;

      SeedSingleton.instance = new SeedSingleton(
        prismaClient,
        isInternalClient
      );
    }
    return SeedSingleton.instance;
  }

  async seed() {
    console.log('Start seeding ...');

    console.log('DATABASE_URL:', process.env.DATABASE_URL, '\n');

    for (const data of users) {
      const userFound = await this.prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });
      if (!userFound) {
        const user = await this.prisma.user.create({ data });
        console.log(`Created user with email: ${user.email}`);
      }
    }
    const adminDetail = await this.prisma.user.findFirst({
      where: {
        role: UserRole.ADMIN,
      },
    });
    if (adminDetail) {
      for (const vote of votes) {
        const { title, description, endDate, options } = vote;
        const { id } = await this.prisma.poll.create({
          data: {
            title,
            description,
            userId: adminDetail.id,
            endsAt: endDate,
            options: {
              create: options,
            },
          },
        });
      }
    }
    console.log('Seeding finished.');
  }

  async run() {
    try {
      await this.seed();
    } catch (error) {
      console.error('Seeding error:', error);
      if (this.isInternalClient) {
        process.exit(1);
      }
    } finally {
      if (this.isInternalClient) {
        await this.prisma.$disconnect();
      }
    }
  }
}
module.exports = {
  SeedSingleton,
};
