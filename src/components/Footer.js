import React from 'react';
import config from '../../config.js';

export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <p className="m-0 small">
          Copyright &copy; {config.siteTitle} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
