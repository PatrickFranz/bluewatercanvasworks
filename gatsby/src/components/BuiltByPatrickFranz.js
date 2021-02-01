import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const StyledBuildBy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;

  .fas {
    color: #d63031;
    padding: 0 5px;
  }

  .img-wrap {
    position: relative;
    padding: 0 5px;
    top: 5px;
  }

  a {
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function BuiltByPatrickFranz() {
  const logo = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "assets/images/logo-pf.png" }) {
        childImageSharp {
          fixed(width: 20) {
            originalName
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <StyledBuildBy>
      <a href="https://www.patrickfranz.com">
        Built with <i className="fas fa-heart"></i> by{' '}
        <span className="img-wrap">
          <Img fixed={logo.logo.childImageSharp.fixed} />
        </span>
        Patrick Franz
      </a>
    </StyledBuildBy>
  );
}
