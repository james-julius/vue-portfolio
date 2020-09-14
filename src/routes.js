import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

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
      path: '/contact',
      component: Contact,
      props: true
    }
  ];
  
export default routes;