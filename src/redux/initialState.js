export const initialState = {
  posts: {
    data: [
      {
        id: 0,
        name: 'Mikser',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        published: '11 05 2020',
        updated: '14 05 2020',
        mail: 'anna@mail.com',
        status: 'published',
      },
      {
        id: 1,
        name: 'Odkurzacz',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '12 05 2020',
        updated: '15 05 2020',
        mail: 'tom@mail.com',
        status: 'published',
      },
      {
        id: 2,
        name: 'Czajnik',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        published: '10 05 2020',
        updated: '16 05 2020',
        mail: 'michael@mail.com',
        status: 'published',
      },
    ],

    loading: {
      active: false,
      error: false,
    },
  },

  userLogged: true,
};
