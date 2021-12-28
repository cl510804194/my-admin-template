export default [
  {
    path: '/',
  },

  {
    name: '币种信息',
    icon: 'table',
    path: '/tokens',
    routes: [
      {
        path: '/tokens/list',
        name: '上币列表',
        icon: 'smile',
        component: './tokens',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
