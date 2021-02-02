import React from 'react';

const SectionContainer = ({ children }) => {
  return (
    <div className="container">
      <section className="page-section contact-cta cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner rounded">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionContainer;
