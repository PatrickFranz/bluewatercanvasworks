import React from 'react';
import { FiFacebook as Facebook } from 'react-icons/fi';
import { Col, Container, Row } from 'react-bootstrap';
import config from '../../config.js';
import BuiltByPatrickFranz from './BuiltByPatrickFranz.js';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

export default function Footer() {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "assets/images/logo-t-cropped.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <footer className="footer text-faded text-center py-5">
      <Container fluid>
        <Row>
          <Col sm={6} md={3}>
            <Img fluid={logo.childImageSharp.fluid} />
            <p className="p-0 m-0">101 Westpoint Harbor Drive</p>
            <p>Redwood City, CA</p>
          </Col>
          <Col sm={6} md={3}>
            <h5 className="footer-heading">Follow</h5>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/bluewatercanvasworks"
            >
              <Facebook color="white" size="2rem" />
            </a>
          </Col>
          <Col sm={6} md={3}>
            <h5 className="footer-heading">Explore</h5>
            <Link
              className="nav-link text-uppercase text-expanded"
              to="/"
              activeClassName="active"
            >
              Home
            </Link>
            <Link
              className="nav-link text-uppercase text-expanded"
              to="/about"
              activeClassName="active"
            >
              About
            </Link>
            <Link
              className="nav-link text-uppercase text-expanded"
              to="/projects"
              activeClassName="active"
            >
              Projects
            </Link>
            <Link
              className="nav-link text-uppercase text-expanded"
              to="/contact"
              activeClassName="active"
            >
              Contact
            </Link>
          </Col>
          <Col sm={6} md={3}>
            <h5 className="footer-heading">Legal</h5>
            <Link to="/privacy" className="nav-link">
              Privacy
            </Link>
            <Link to="/tos" className="nav-link">
              Terms of Service
            </Link>
          </Col>
        </Row>
        <Row>
          <Col id="foot-copyright">
            <p className="p-0 m-0">
              Copyright &copy; {config.siteTitle} {new Date().getFullYear()}
            </p>
            <BuiltByPatrickFranz />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
