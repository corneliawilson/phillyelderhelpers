import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../components/Navigation';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    // if (this.props.isAuthenticated) {
    //   return <Redirect to="/user/" />
    // } else {
      console.log("VOLUNTEER HOME")
      return (
        <div className="app">
        <Navigation />
        Volunteer home
          
        </div>
      );
    }
  //}
}

export default Home;
