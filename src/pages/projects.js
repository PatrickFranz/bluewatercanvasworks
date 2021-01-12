import React from 'react';

import Layout from '../components/Layout';

import product1 from '../assets/images/gla_hunter1.jpg';
import product2 from '../assets/images/gla_catamaran.jpg';
import product3 from '../assets/images/products-03.jpg';

const IndexPage = () => (
  <Layout activeLink="products">
    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">Restored to glory</span>
                <span className="section-heading-lower">
                  Hunter 45 - Osprey
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product1}
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                We take pride in our work, and it shows. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Vitae dolores amet, ullam quo
                ea architecto odit officia recusandae modi quibusdam sunt fugiat
                unde consequuntur pariatur error magni nobis minima inventore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Show your new colors
                </span>
                <span className="section-heading-lower">
                  Fancy Catamaran - Dockmaster
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product2}
            alt=""
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                id blanditiis nostrum et voluptatibus distinctio modi
                exercitationem repudiandae, accusantium pariatur sit assumenda?
                Quam velit reiciendis repellendus voluptate ullam, labore vel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
