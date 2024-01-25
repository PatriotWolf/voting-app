# NextJS Voting App

This is a voting application utilizing a full Next.js solution.

### Built With

This project is bootstraped with:

[![Next][Next.js]][Next-url]
[![PostgreSQL][PostgreSQL]][PostgreSQL-url]
[![Prisma][Prisma.io]][Prisma-url]

### Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Yarn - We are using [Yarn](https://yarnpkg.com/getting-started/install) as our package management.

### Env Variables

Create a .env file in then root and add the following

```
NEXTAUTH_SECRET=
DATABASE_URL=
```

### Start the app

1. On root of this project, run this command:

   ```bash
   yarn install
   ```

2. If this is your first time running this app, run this command:

   ```bash
   yarn seed
   ```

3. Run the development server script with:

   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Enjoy!**

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[PostgreSQL]: https://img.shields.io/static/v1?style=for-the-badge&message=PostgreSQL&color=4169E1&logo=PostgreSQL&logoColor=FFFFFF&label=
[PostgreSQL-url]: https://www.postgresql.org
[Prisma.io]: https://img.shields.io/badge/prisma.io-000000?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://Prisma.io/
