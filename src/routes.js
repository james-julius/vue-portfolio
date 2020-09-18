// Lazy loaded routes
const [Home, About, Quote] = [
  () => import('./pages/Home'), 
  () => import('./pages/About'), 
  () => import('./pages/Quote')
];

// Routes for the application
const routes = [
    {
      path: '/',
      component: Home,
      props: true
    },
    {
      path: '/about',
      component: About,
      props: true
    },
    {
      path: '/get-quote',
      component: Quote,
      props: true
    }
  ];
  
export default routes;