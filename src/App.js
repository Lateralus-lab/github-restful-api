import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
  formatName(user) {
    return user.firstName + '' + user.lastName;
  }

  render() {
    const isValid = true;

    const user = {
      firstName: 'Greg',
      lastName: 'Lim',
    };

    return (
      <div>
        <h1>Hello, {this.formatName(user)}</h1>
        <Products />
        <Button variant="danger" disabled={!isValid}>
          Default
        </Button>
        <div>
          <Rating rating="1" />
          <Rating rating="2" />
          <Rating rating="3" />
          <Rating rating="4" />
          <Rating rating="5" />
        </div>
      </div>
    );
  }
}

export default App;
