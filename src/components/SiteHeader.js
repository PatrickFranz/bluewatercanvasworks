import React from 'react';
import config from '../../config';
export default function SiteHeader() {
  return (
    <h1 className="site-heading text-center text-white d-none d-lg-block">
      <span className="site-heading-upper  mb-3">{config.subHeading}</span>
      <span className="site-heading-lower">{config.heading}</span>
      <span className="site-heading2-lower">{config.heading2}</span>
    </h1>
  );
}
