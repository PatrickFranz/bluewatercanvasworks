import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import config from '../../config.js';
import BuiltByPatrickFranz from './BuiltByPatrickFranz.js';

export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-5">
      <Container>
        <Row>
          <Col className="small">
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
