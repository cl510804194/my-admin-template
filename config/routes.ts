export default [
  {
    path: '/',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '租户管理',
    icon: 'table',
    path: '/tenant',
    routes: [
      {
        path: '/tenant/list',
        name: '租户列表',
        icon: 'smile',
        component: './tenant',
      },
      {
        path: '/tenant/edit-tenant',
        name: '添加租户',
        icon: 'smile',
        component: './edit-tenant',
        menu: false,
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
