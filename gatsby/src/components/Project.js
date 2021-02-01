import React from 'react';
import Img from 'gatsby-image';
import { Carousel } from 'react-bootstrap';

export default function Project({ project }) {
  console.log(project);
  return (
    <>
      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ml-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">
                    {`${project.tagline}`}
                  </span>
                  <span className="section-heading-lower">
                    {`${new Date(
                      project.boatinfo.yearbuilt
                    ).getUTCFullYear()} ${project.boatinfo.manufacturer} ${
                      project.boatinfo.model
                    } `}
                    <span className="boat-name">
                      {` ${project.boatinfo.boatName}`}
                    </span>
                    {}
                  </span>
                </h2>
              </div>
            </div>
            <Carousel>
              {project.carouselImages.map(image => (
                <Carousel.Item key={image.asset.id}>
                  <Img
                    className="product-item-img mx-auto d-block rounded img-fluid"
                    fluid={image.asset.fluid}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="product-item-description d-flex mr-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
