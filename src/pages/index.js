import React from 'react';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    intro: file(relativePath: { eq: "assets/images/intro.jpg" }) {
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis vitae magnam debitis repudiandae odio neque ipsa vel
                laborum. Officia amet nulla quo, itaque sed voluptatum cum
                doloremque animi sapiente quos.
              </p>
              <div className="intro-button mx-auto">
                <a className="btn btn-primary btn-xl" href="/#">
                  Get A Quote!
                </a>
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
                <p className="mb-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore veritatis vel quo illo quidem labore sequi eveniet
                  corrupti laudantium consectetur unde reiciendis mollitia
                  aperiam, incidunt optio odio velit ab. Beatae!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
