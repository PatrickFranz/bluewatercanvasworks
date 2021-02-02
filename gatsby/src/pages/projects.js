import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Fade from 'react-fade-in';
import Project from '../components/Project';

export const data = graphql`
  query {
    projects: allSanityProject {
      nodes {
        boatinfo {
          boatName
          manufacturer
          model
          yearbuilt
        }
        description
        id
        tagline
        title
        carouselImages {
          alt
          image {
            asset {
              id
              fluid {
                ...GatsbySanityImageFluid
              }
            }
            hotspot {
              height
              width
              x
              y
            }
          }
        }
        coverimage {
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          alt
        }
      }
      totalCount
    }
  }
`;

const IndexPage = ({ data }) => {
  console.log(data);
  const projects = data.projects.nodes;
  //DON'T PRETTIFY
  return (
    <Layout>
      <Fade transitionDuration="1000">
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </Fade>
    </Layout>
  );
};

export default IndexPage;
