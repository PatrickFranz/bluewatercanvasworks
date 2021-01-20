import React from 'react';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Fade from 'react-fade-in';
import { Carousel } from 'react-bootstrap';

export const data = graphql`
  query {
    hurrica: allFile(
      filter: { relativeDirectory: { eq: "assets/images/projects/hurricav" } }
    ) {
      nodes {
        id
        childImageSharp {
          fluid(maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  //DON'T PRETTIFY
  return (
    <Layout>
      <Fade transitionDuration="1000">
        <section className="page-section">
          <div className="container">
            <div className="product-item">
              <div className="product-item-title d-flex">
                <div className="bg-faded p-5 d-flex ml-auto rounded">
                  <h2 className="section-heading mb-0">
                    <span className="section-heading-upper">
                      Protecting a Legend
                    </span>
                    <span className="section-heading-lower">
                      1923 Victorian Ketch - Hurrica V
                    </span>
                  </h2>
                </div>
              </div>
              <Carousel>
                {data.hurrica.nodes.map(node => (
                  <Carousel.Item key={node.id}>
                    <Img
                      className="product-item-img mx-auto d-block rounded img-fluid"
                      fluid={node.childImageSharp.fluid}
                      alt=""
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="product-item-description d-flex mr-auto">
                <div className="bg-faded p-5 rounded">
                  <p className="mb-0">
                    A truely classic yacht that has had an extensive refit and
                    recently arrived from Australia. There was a temendous
                    amount of work put into restoring this beautiful piece of
                    sailing history. It was our job to design and manufacture
                    canvas that would protect the vessel while keeping true to
                    its classic design.
                  </p>
                  <p>
                    We built hatch covers and winch covers that would keep the
                    elements out, and blend in with the ashen teak and
                    spectacular brightwork.
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
