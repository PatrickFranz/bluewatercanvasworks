import { useStaticQuery } from 'gatsby';
import React from 'react';
import Fade from 'react-fade-in';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import QuoteForm from '../components/FormQuote';
import FormGetQuote from '../components/FormGetQuote';

export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
      phone: file(relativePath: { eq: "assets/images/contact-phone.jpg" }) {
        childImageSharp {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      email: file(relativePath: { eq: "assets/images/contact-email.jpg" }) {
        childImageSharp {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Fade>
        <div className="container">
          <section className="page-section contact-cta cta">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 mx-auto">
                  <div className="cta-inner text-center rounded">
                    <h2 className="section-heading mb-4">
                      <span className="section-heading-upper">Contact Us</span>
                      <span className="section-heading-lower">
                        Let's discuss your project
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Start overlap block */}
          <section className="page-section contact-section">
            <div className="row">
              <div className="col-xl-5">
                <Img
                  className="img-fluid rounded phone-contact-img mb-3 mb-lg-0"
                  fluid={data.phone.childImageSharp.fluid}
                />
              </div>
              <div className="col-xl-7 overlap-left-down">
                <div className="bg-faded rounded p-5">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper pad-left">
                      By phone
                    </span>
                    <span className="section-heading-lower">
                      Give us a call
                    </span>
                  </h2>
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-lower contact-phone-text">
                      415-572-0891
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </section>
          {/* End overlap block */}
          {/* Start overlap block */}
          <div className="page-section contact-section">
            <div className="row">
              <div className="col-xl-5">
                <Img
                  className="img-fluid rounded phone-contact-img mb-3 mb-lg-0"
                  fluid={data.email.childImageSharp.fluid}
                />
              </div>
              <div className="col-xl-7 overlap-left-down">
                <div className="bg-faded rounded p-5">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper pad-left">
                      By Email
                    </span>
                    <span className="section-heading-lower">
                      Request a Quote
                    </span>
                  </h2>
                  <FormGetQuote />
                  {/* <QuoteForm /> */}
                </div>
              </div>
            </div>
          </div>
          {/* End overlap block */}
        </div>
      </Fade>
    </Layout>
  );
}
