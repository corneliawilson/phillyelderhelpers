import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './layout.css';
import Navbar from './NavBar';
import Footer from './Footer';

import routes from '../routes';

class Layout extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-panel" >
          <Navbar {...this.props} />
          <div className="content">
            <Switch>
                {routes.map((route, key) => {
                  return route.component ? (
                    <Route
                      path={route.path}
                      component={route.component}
                      key={key}
                    />
                ) : (null);
              })}
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
