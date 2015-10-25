import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import { viewSelector } from '../utils/viewSelector';
import * as BackendActionCreators from '../actions/BackendActions';
import { bindActionCreators } from 'redux';

class Container extends Component {
  componentWillMount() {
    const { getUser } = this.props;
    getUser();
  }
  
  render() {
    const { component } = this.props;
    return (
      <Layout>
        {component}
      </Layout>
    );
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(BackendActionCreators, dispatch),
    dispatch,
  };
}

export default connect(viewSelector, mapDispatchToProps)(Container);
