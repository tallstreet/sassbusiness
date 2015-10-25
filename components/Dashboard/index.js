import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as BackendActionCreators from '../../actions/BackendActions';
import { bindActionCreators } from 'redux';

const styles = {
  layout: {
    margin: '0 auto',
    paddingTop: '78px',
    '@media (maxWidth: 1100px)': {
      margin: '0 10px',
    },
  },
};

class Dashboard extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }


  render() {
    const { user } = this.props;
    return (
      <div className="wrapper" style={styles.layout}>
        Hi {user.email}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
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
)(Dashboard);
