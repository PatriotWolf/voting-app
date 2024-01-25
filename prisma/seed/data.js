const { UserRole } = require('@prisma/client');

const users = [
  {
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin',
    role: UserRole.ADMIN,
  },
  {
    name: 'User 1',
    email: 'user@test.com',
    password: 'user',
  },
  {
    name: 'User 2',
    email: 'user2@test.com',
    password: 'user2',
  },
];

const votes = [
  {
    title: 'Vote 1',
    description: 'This is first vote',
    endDate: new Date(),
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
  {
    title: 'Vote 2',
    description: 'This is second vote',
    endDate: new Date(),
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
  {
    title: 'Vote 3',
    description: 'This is third vote',
    endDate: new Date(),
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
  {
    title: 'Vote 4',
    description: 'This is forth vote',
    endDate: new Date(),
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
  {
    title: 'Vote 5',
    description: 'This is fifth vote',
    endDate: new Date(),
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
  {
    title: 'Vote 6',
    description: 'This is sixth vote',
    endDate: new Date(),
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
  {
    title: 'Vote 7',
    description: 'This is seventh vote',
    endDate: new Date(),
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
  {
    title: 'Vote 8',
    description: 'This is eighth vote',
    endDate: new Date(),
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
  {
    title: 'Vote 9',
    description: 'This is ninth vote',
    endDate: new Date(),
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
  {
    title: 'Vote 10',
    description: 'This is tenth vote',
    endDate: new Date(),
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
];
module.exports = {
  users,
  votes,
};
