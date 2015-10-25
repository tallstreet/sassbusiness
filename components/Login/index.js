import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as BackendActionCreators from '../../actions/BackendActions';
import { bindActionCreators } from 'redux';
import LoginForm from './LoginForm';

const styles = {
  layout: {
    margin: '0 auto',
    paddingTop: '78px',
    '@media (maxWidth: 1100px)': {
      margin: '0 10px',
    },
  },
};

class Login extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  renderMessage(message) {
    return (
      <div className="wrapper alert alert-danger" role="alert">
        {message}
      </div>
    );
  }

  render() {
    const { login, loginError } = this.props;
    return (
      <div style={styles.layout}>
        {loginError ? this.renderMessage(loginError.message) : null}
        <LoginForm onSubmit={login}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginError: state.backend.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(BackendActionCreators, dispatch),
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
