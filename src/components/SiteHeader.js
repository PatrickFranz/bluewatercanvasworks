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
  console.log(logo);
  return (
    <Container className="site-header">
      <h1 className="site-heading text-center d-none d-lg-block">
        <span className="site-heading-upper text-faded mb-3">
          {config.subHeading}
        </span>
      </h1>
      <Img className="mx-auto" fluid={logo.childImageSharp.fluid} />
      {/* <span className="site-heading-lower">{config.heading}</span>
      <span className="site-heading2-lower">{config.heading2}</span> */}
    </Container>
  );
}
