import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Container from './Container';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
