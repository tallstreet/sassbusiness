import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Container from './Container';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Container />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
