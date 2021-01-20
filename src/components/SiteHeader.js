import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Container } from 'react-bootstrap';
import config from '../../config';

export default function SiteHeader() {
  const { logo } = useStaticQuery(graphql`
    query MyQuery {
      logo: file(relativePath: { eq: "assets/images/logo-t-cropped.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Container className="site-header">
      <h1 className="site-heading text-center d-none d-lg-block">
        <span className="site-heading-upper text-faded mb-4">
          {config.subHeading}
        </span>
      </h1>
      <div className="cta">
        <div className="cta-inner rounded img-container mx-auto">
          <Img
            loading="eager"
            className="heading-logo mx-auto"
            fluid={logo.childImageSharp.fluid}
          />
        </div>
      </div>
    </Container>
  );
}
