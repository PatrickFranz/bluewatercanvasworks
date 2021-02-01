import React from 'react';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import Fade from 'react-fade-in';

export const query = graphql`
  query {
    intro: file(relativePath: { eq: "assets/images/intro-winch.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout activeLink="home">
      <Fade transitionDuration="1000">
        <section className="page-section clearfix">
          <div className="container">
            <div className="intro">
              <Img
                className="intro-img img-fluid mb-3 mb-lg-0 rounded"
                fluid={data.intro.childImageSharp.fluid}
                alt=""
              />
              <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">Quality Canvas</span>
                  <span className="section-heading-lower">
                    Making Your Boat Beautiful
                  </span>
                </h2>
                <p className="mb-3">
                  Your boat was designed to take you around The Bay and around
                  the world. It's an engineering marvel built to look good even
                  in ugly conditions. Our canvas work protects your investment
                  from the elements, looks fantastic, and makes your amazing
                  vessel even better!
                </p>
                <div className="intro-button mx-auto">
                  <Link to="/contact" className="btn btn-primary btn-xl">
                    Get A Quote!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section cta">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <div className="cta-inner text-center rounded">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">Our Promise</span>
                    <span className="section-heading-lower">To You</span>
                  </h2>
                  <p className="mb-0 text-center">
                    We promise to make your boat more beautiful, more
                    functional, and make you smile every time you go aboard. We
                    are meticulous from the initial, grand idea down to the
                    finest of details. It might take a little longer, but we
                    will make sure what goes on your boat is something we would
                    be proud to put on ours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </Layout>
  );
};

export default IndexPage;
