
const routes = [
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          needAuth: true
        },
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            name: 'safehouse',
            path: 'safehouse',
            component: () => import('layouts/EmptyLayout.vue'),
            children: [
              {
                name: 'safehouse-dashboard',
                path: 'dashboard',
                component: () => import('pages/dashboard/safehouse/dashboard.vue') 
              },
              {
                name: 'safehouse-bonds',
                path: 'bonds',
                component: () => import('pages/dashboard/safehouse/bonds.vue') 
              },
              {
                name: 'safehouse-bonds-market',
                path: 'bonds-market1',
                component: () => import('src/pages/dashboard/safehouse/bonds-market1.vue') 
              }
            ]
          },
          {
            name: 'payment',
            path: 'payment',
            component: () => import('pages/dashboard/payment.vue') 
          },
          {
            name: 'buy-sell',
            path: 'buy-sell',
            component: () => import('pages/dashboard/dashboard-buysell.vue') 
          },
          { path: 'exchange', component: () => import('pages/dashboard/dashboard-exchange.vue') },
          { path: 'kiwi', component: () => import('pages/dashboard/dashboard-kiwihome.vue') },
          { path: 'safehourse', component: () => import('pages/dashboard/dashboard-safehouse.vue') },
          { path: 'bonds', component: () => import('pages/dashboard/bonds.vue') },
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
