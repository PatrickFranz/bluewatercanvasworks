import React from 'react';
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap';

export default function QuoteForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
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
          as="textarea"
          rows={4}
          name="description"
          placeholder="Tell us about your project"
          size="lg"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </Form.Group>

      <Button variant="primary" type="submit" size="lg">
        Get Quote
      </Button>
    </Form>
  );
}
