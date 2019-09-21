import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loadable from 'react-loadable';
import IsAuth from './utils/isAuth';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers

// Pages
const Home = Loadable({
  loader: () => import('./views/Pages/Home'),
  loading
});

const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});

const VolunteerDashboard = Loadable({
  loader: () => import('./views/Volunteer/VolunteerDashboard'),
  loading
});

const SeniorDashboard = Loadable({
  loader: () => import('./views/Senior/SeniorDashboard'),
  loading
});

class App extends Component {
  render() {
    return (
      <div>
        <Switch>

          <Route exact path="/" name="Welcome Page" component={Home} />
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />

          <Route path='/volunteer/' name="Volunteer Dashboard" component={VolunteerDashboard}/>
          <Route path='/user/' name="User Dashboard" component={SeniorDashboard}/>


          <IsAuth>
            <Switch>
            </Switch>
          </IsAuth>
        </Switch>
      </div>
    );
  }
}


export default App;
