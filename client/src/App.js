import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loadable from 'react-loadable';
import IsAuth from './utils/isAuth';

// Containers
import Layout from './Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" render={props => <Layout {...props} />} />
      </div>
    );
  }
}

export default App;



