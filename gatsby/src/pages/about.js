import React from 'react';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import Fade from 'react-fade-in';
import { graphql } from 'gatsby';

export const data = graphql`
  query {
    about: file(relativePath: { eq: "assets/images/story-rainbow.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    karen: file(relativePath: { eq: "assets/images/prof_karen1.png" }) {
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout activeLink="about">
      <Fade transitionDuration="1000">
        <section className="page-section about-heading">
          <div className="container">
            <Img
              className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
              fluid={data.about.childImageSharp.fluid}
              alt=""
            />
            <div className="about-heading-content">
              <div className="row">
                <div className="col-xl-9 col-lg-10 mx-auto">
                  <div className="bg-faded rounded p-5">
                    <h2 className="section-heading mb-4">
                      <span className="section-heading-upper">
                        Beautiful Canvas, Beautiful Boats
                      </span>
                      <span className="section-heading-lower">
                        Our Canvas Story
                      </span>
                    </h2>
                    <p className="about-text">
                      My love for sailing and boats started at the age of 4,
                      sailing with my family in Long Island Sound aboard our 33’
                      Vanguard. Though the years and on different boats we've
                      sailed the Virgin Islands, Bermuda and most recently the
                      California Coast and San Francisco Bay which has been our
                      home for the past 35 years. You'll often see us cruising
                      the SF Bay in our 50' Valiant or taking weekend trips up
                      and down our beautiful Pacific Coast.
                    </p>
                    <p className="about-text">
                      I learned to sew and fabricate canvas from one of the best
                      in the business, Mark Hood at Hood Canvas LLC, in
                      Merrimac, MA. My years of boating have taught me that
                      canvas needs to be functional while remaining beautiful.
                      My attention to detail will make sure that your project
                      turns out better than you could imagine.
                    </p>
                  </div>
                  <div className="owner-container">
                    <Img
                      className="owner-image rounded img-fluid"
                      fluid={data.karen.childImageSharp.fluid}
                      alt="Karen's profile picture"
                    />
                  </div>
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
