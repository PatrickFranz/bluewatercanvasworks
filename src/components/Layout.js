import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/bluewater.scss';
import Footer from './Footer';
import SiteHeader from './SiteHeader';
import Header from './Header';

class Layout extends Component {
  render() {
    const {
      children,
      noHeader,
      noFooter,
      noSiteHeader,
      activeLink,
    } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'SF Bay Canvas Works' },
                {
                  name: 'keywords',
                  content:
                    'canvas, san francisco, design, manufacture, sailboat, powerboat, sail, sailing, sails, bimini, dodger, canvas design, canvas fabrication, boat fabric',
                },
              ]}
            >
              <html lang="en" />
              <script
                src={`https://www.google.com/recaptcha/api.js?r=${Math.random()}`}
                async
                defer
              ></script>
            </Helmet>
            <div className={'page-top'}>
              {!noSiteHeader ? <SiteHeader /> : null}
              {!noHeader ? <Header activeLink={activeLink} /> : null}
              {children}
              {!noFooter ? <Footer /> : null}
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noFooter: PropTypes.bool,
  noHeader: PropTypes.bool,
  noSiteHeader: PropTypes.bool,
  activeLink: PropTypes.string,
};

export default Layout;
