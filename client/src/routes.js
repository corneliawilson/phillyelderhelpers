import Home from './views/Pages/Home';
import VolunteerHome from './views/Pages/Home/VolunteerHome';
import SeniorHome from './views/Pages/Home/SeniorHome';
import VolunteerDashboard from './views/Volunteer/VolunteerDashboard';
import SeniorDashboard from './views/Senior/SeniorDashboard';

import Login from './views/Pages/Login';
import Register from './views/Pages/Register';
import Page500 from './views/Pages/Page500';
import Page404 from './views/Pages/Page404';

const routes = [
  { path: '/500', exact: true, name: 'Error', component: Page500}, 
  { path: '/404', exact: true, name: 'Error', component: Page404},
  { path: '/login', exact: true, name: 'Error', component: Login},
  { path: '/register', exact: true, name: 'Error', component: Register},
  { path: '/volunteer/', exact: true, name: 'Volunteer', component: VolunteerHome},
  { path: '/senior/', exact: true, name: 'Senior', component: SeniorHome},
  { path: '/volunteer/dashboard/', exact: true, name: 'Dashboard', component: VolunteerDashboard},
  { path: '/senior/dashboard/', exact: true, name: 'Dashboard', component: SeniorDashboard},
  { path: '/', exact: true, name: 'Home', component: Home}
];

export default routes;

