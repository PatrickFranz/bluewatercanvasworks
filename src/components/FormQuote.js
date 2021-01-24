import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function QuoteForm() {
  const [token, setToken] = useState(null);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      boatType: '',
      boatLocation: '',
      description: '',
      recaptcha: '',
    },
    onSubmit: data => {
      console.log(data);
      if (token !== null) {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact-form',
            ...data,
            'g-recaptcha-response': token,
          }),
        })
          .then(() => {
            console.log('send succeeded');
          })
          .catch(error => console.log('sending failed'));
      }
    },
  });
  return (
    <Form
      name="get-quote"
      data-nelify="true"
      data-nelify-honeypot="bot-field"
      onSubmit={formik.handleSubmit}
    >
      <Form.Group>
        <Form.Control type="hidden" name="form-name" value="get-quote" />
        <Form.Control type="hidden" name="bot-field" />
        <Form.Control
          name="name"
          size="lg"
          type="text"
          id="id"
          placeholder="Your Full Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="email"
          type="email"
          id="email"
          size="lg"
          placeholder="youremail@domain.com"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="phone"
          type="phone"
          id="phone"
          size="lg"
          placeholder="Phone number"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="boatType"
          type="text"
          id="boatType"
          size="lg"
          placeholder="Boat Model / Manufacturer"
          onChange={formik.handleChange}
          value={formik.values.boatType}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="boatLocation"
          type="text"
          id="boatLocation"
          size="lg"
          placeholder="Location of Boat (City / Marina)"
          onChange={formik.handleChange}
          value={formik.values.boatLocation}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={4}
          name="description"
          placeholder="Tell us about your project"
          size="lg"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </Form.Group>
      <Form.Group>
        <Recaptcha
          sitekey="6LcwAzgaAAAAAGlgUkFdY4vTse4lyzs1VpcIwNPS"
          render="explicit"
          theme="light"
        />
      </Form.Group>

      <Button variant="primary" type="submit" size="lg">
        Get Quote
      </Button>
    </Form>
  );
}
