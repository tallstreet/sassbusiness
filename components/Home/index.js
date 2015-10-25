import React from 'react';
import Radium from 'radium';
import Section from './Section';
import Link from '../../utils/Link';
import translate from 'counterpart';

const styles = {
  homeMain: {
    margin: '0 auto',
    paddingTop: '58px',
  },

  homeSection: {
    display: 'block',
    overflow: 'hidden',
    position: 'relative',
    padding: '40px 0',
  },

  homeHero: {
    paddingTop: 0,
    color: '#000',
    position: 'relative',
    background: 'no-repeat #fff center center',
    backgroundSize: 'cover',
    boxShadow: '0 1px 5px 2px rgba(0,0,0,.25)',
    fontSize: '.8em',
    backgroundImage: 'url(http://loremflickr.com/1000/1000/beach)',
    paddingBottom: '700px',
  },

  homeHeroIntro: {
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '0',
    width: 'auto',
    height: 'auto',
  },

  homeHeroIntroH1: {
    margin: 0,
    textTransform: 'uppercase',
    fontFamily: '"Roboto",sans-serif',
    fontWeight: 100,
    backgroundColor: '#fff',
    opacity: 0.8,
    fontSize: '5.3em',
  },

  homeHeroIntroH2: {
    lineHeight: 1.5,
    marginTop: 0,
    fontFamily: '"Roboto",sans-serif',
    fontWeight: 300,
    fontSize: '2.35em',
    backgroundColor: '#fff',
    opacity: 0.8,
    color: '#757575',
  },

  homeTeaser: {
    backgroundColor: '#ff6e40',
  },

  homeTeaserText: {
    fontFamily: '"Roboto",sans-serif',
    fontWeight: 100,
    textTransform: 'uppercase',
    letterSpacing: '.1em',
    color: '#fff',
    fontSize: '1.8em',
    padding: '2em 0',
  },
};

@Radium
export default class Home extends React.Component {
  render() {
    return (
      <div style={styles.homeMain} >
        <section style={[styles.homeSection, styles.homeHero]}>
          <div style={styles.homeHeroIntro}>
            <div className="wrapper">
                <h1 style={styles.homeHeroIntroH1}>
                  {translate('homepage.intro')}
                </h1>
                <p style={styles.homeHeroIntroH2}>
                  {translate('homepage.sub_intro')}
                </p>
            </div>
          </div>
        </section>
        <div style={styles.homeTeaser}>
          <div className="wrapper">
            <div style={styles.homeTeaserText}>
              {translate('homepage.teaser')}
            </div>
          </div>
        </div>
        <Section image="http://loremflickr.com/320/240/brazil,girls" even>
          <h2>
            {translate('homepage.section1header')}
          </h2>
          <p>
            {translate('homepage.section1body')}
          </p><Link className="btn btn-primary" data-g-event="home" data-g-label="getcardboard" to="/signup">{translate('global.signup')}</Link>
        </Section>
        <Section image="http://loremflickr.com/320/240/beach,rocks">
          <h2>
            {translate('homepage.section2header')}
          </h2>
          <p>
            {translate('homepage.section2body')}
          </p><Link className="btn btn-primary" data-g-event="home" data-g-label="getcardboard" to="/signup">{translate('global.signup')}</Link>
        </Section>
        <Section image="http://loremflickr.com/320/240/beach,shells" even>
          <h2>
            {translate('homepage.section3header')}
          </h2>
          <p>
            {translate('homepage.section3body')}
          </p><Link className="btn btn-primary" data-g-event="home" data-g-label="getcardboard" to="/signup">{translate('global.signup')}</Link>
        </Section>
      </div>
    );
  }
}
