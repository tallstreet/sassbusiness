import React from 'react';
import Radium from 'radium';
import cx from 'classnames';

const styles = {
  homeSection: {
    display: 'block',
    overflow: 'hidden',
    position: 'relative',
    padding: '60px 0',
  },

  homeSectionEven: {
    background: '#fafafa',
  },

  homeSectionOdd: {
    background: '#fff',
  },

  image: {
    width: 400,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },

  body: {
    overflow: 'inherit',
  },

};

@Radium
export default class Section extends React.Component {
  getMediaClass() {
    return cx({
      'media': true,
      'media--rev': !this.props.even,
    });
  }

  render() {
    return (
      <section style={[this.props.even ? styles.homeSectionEven : styles.homeSectionOdd, styles.homeSection]}>
        <div className="wrapper">
          <div className={this.getMediaClass()}>
            <img className="media__img" style={[styles.image]} src={this.props.image} />
            <div className="media__body" style={[styles.body]}>
              <div style={styles.content}>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
