import React, { PropTypes } from 'react';
import Radium from 'radium';
import translate from 'counterpart';
import { connect } from 'react-redux';
import * as BackendActionCreators from '../../actions/BackendActions';
import { bindActionCreators } from 'redux';

import Link from '../../utils/Link';

const styles = {
  headerComponent: {
    position: 'fixed',
    boxShadow: '0 0 8px rgba(0,0,0,.4)',
    height: '58px',
    backgroundColor: '#fafafa',
    padding: 0,
    boxSizing: 'border-box',
    transition: 'background-color .25s cubic-bezier(.4,0,.2,1) .1s,box-shadow .1s cubic-bezier(.4,0,.2,1) .22s',
    zIndex: 999,
    width: '100%',
  },

  headerTeleport: {
    height: '1px',
    left: '-10000px',
    overflow: 'hidden',
    position: 'absolute',
    top: 'auto',
    width: '1px',
  },

  headerComponentLogo: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    'float': 'left',
    height: '45px',
    margin: '8px 12px',
    overflow: 'hidden',
    textTransform: 'none',
    width: '50px',
    backgroundPosition: '0 0',
    ':hover': {
      backgroundPosition: '100% 0',
    },
  },

  headerComponentHeader: {
    'float': 'left',
  },

  headerComponentNav: {
    'float': 'right',
  },

  headerComponentNavList: {
    listStyle: 'none',
    marginLeft: 0,
  },

  headerComponentNavItem: {
    display: 'inline-block',
    marginRight: '10px',
  },

  headerComponentFlag: {
    height: '18px',
  },

  headerComponentNavLink: {
    color: '#202020',
    display: 'block',
    lineHeight: '24px',
    position: 'relative',
    textTransform: 'none',
    whiteSpace: 'nowrap',
    transition: 'color .2s cubic-bezier(.4,0,.2,1)',
  },
};

@Radium
class Header extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
  }

  renderLoggedOutNav() {
    return (
      <div className="see-nav" id="see-nav-x" role="navigation" style={styles.headerComponentNav}>
        <ul className="navbar" style={styles.headerComponentNavList}>
          <li className="nav-item" style={styles.headerComponentNavItem}>
            <Link data-g-event="see: Site Nav" data-g-label="nav-login" to="/login" data-g-action="see: Login" className="btn btn-link">{translate('global.login')}</Link>
            <Link data-g-event="see: Site Nav" data-g-label="nav-signup" to="/signup" data-g-action="see: Signup" className="btn btn-primary">{translate('global.signup')}</Link>
          </li>
        </ul>
      </div>
    );
  }

  renderLoggedInNav() {
    return (
      <div className="see-nav" id="see-nav-x" role="navigation" style={styles.headerComponentNav}>
        <ul className="navbar" style={styles.headerComponentNavList}>
          <li className="nav-item" style={styles.headerComponentNavItem}>
            <Link data-g-event="see: Site Nav" data-g-label="nav-dashboard" to="/dashboard" data-g-action="see: Dashboard" className="btn btn-link">{translate('global.dashboard')}</Link>
            <button className="btn btn-link" onClick={this.props.logout}>{translate('global.logout')}</button>
          </li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div role="banner" style={styles.headerComponent}>
        <div className="wrapper">
          <Link to="/">
          <div style={styles.headerComponentLogo} />
          <h1 className="hide-palm" style={styles.headerComponentHeader}>
              {translate('global.header')}
          </h1></Link> <a className="see-teleport" href="#content" style={styles.headerTeleport}>{translate('global.skip_to_content')}</a>
        {this.props.user ? this.renderLoggedInNav() : this.renderLoggedOutNav()}
        </div>
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
)(Header);
