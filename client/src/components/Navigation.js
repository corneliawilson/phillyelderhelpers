import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="navigation">
          <nav>
            <ul>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/volunteer/dashboard/">Go to volunteer dashboard</Link>
              </li>
              <li>
                <Link to="/senior/dashboard/" >Go to senior dashboard</Link>
              </li>
              <li>
                <Link to="/">Go to public home</Link>
              </li>
              <li>
                <Link to="/register/senior">Go to senior registration</Link>
              </li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default Navigation;
