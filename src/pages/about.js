import React from 'react';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import Fade from 'react-fade-in';
import { graphql } from 'gatsby';

export const data = graphql`
  query {
    about: file(
      relativePath: { eq: "assets/images/gla_sailboat-sailing.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => (
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
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nihil fugit impedit velit voluptate quisquam, autem
                    reprehenderit laboriosam quaerat ducimus earum porro iste ut
                    in est culpa architecto quas laborum atque.
                  </p>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore corporis autem minima quaerat asperiores aliquid
                    non incidunt? Labore, sapiente totam aliquam dolores odio
                    ut, dignissimos vitae ab error, ad eaque?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  </Layout>
);

export default IndexPage;
