import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as BackendActionCreators from '../../actions/BackendActions';
import { bindActionCreators } from 'redux';
import SignupForm from './SignupForm';

const styles = {
  layout: {
    margin: '0 auto',
    paddingTop: '78px',
    '@media (maxWidth: 1100px)': {
      margin: '0 10px',
    },
  },
};

class Signup extends React.Component {

  static propTypes = {
    signup: PropTypes.func.isRequired,
  }

  renderMessage(message) {
    return (
      <div className="wrapper alert alert-danger" role="alert">
        {message}
      </div>
    );
  }

  render() {
    const { signup, signupError } = this.props;
    return (
      <div style={styles.layout}>
        {signupError ? this.renderMessage(signupError.message) : null}
        <SignupForm onSubmit={signup}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    signupError: state.backend.signup,
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
)(Signup);
