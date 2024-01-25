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
    endDate: '2024-01-24T09:09:06.427Z',
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
  {
    title: 'Vote 2',
    description: 'This is second vote',
    endDate: '2024-01-24T09:09:06.427Z',
    options: [{ text: 'Option 1' }, { text: 'Option 2' }],
  },
];
module.exports = {
  users,
  votes,
};
