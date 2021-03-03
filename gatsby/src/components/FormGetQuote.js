import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Button, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import axios from 'axios';

const GetQuoteForm = () => {
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Please give us your full name.')
      .max(40, 'Please keep to less than 40 characters.')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please enter an email address so we can contact you.'),
    phone: Yup.string().matches(
      phoneRegExp,
      'Please enter a valid phone number(ie. 650-555-5555)'
    ),
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    axios({
      method: 'post',
      url: process.env.GATSBY_GET_FORM_URL,
      data: values,
    }).then(res => {
      resetForm({});
      handleShow();
    });

    setSubmitting(false);
  };

  return (
    <>
      {console.log(process.env.GATSBY_GET_FORM_URL)}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            We're looking forward to working with you! Someone will get back to
            you shortly!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          boatType: '',
          boatLocation: '',
          description: '',
          recaptcha: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            name="get-quote"
            onSubmit={e => {
              e.preventDefault();
              handleSubmit(values);
            }}
          >
            <Form.Group>
              <Form.Control
                name="name"
                size="lg"
                type="text"
                id="id"
                placeholder="Your Full Name"
                onChange={handleChange}
                value={values.name}
                className={touched.name && errors.name ? 'error' : null}
              />
              {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
              ) : null}
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="email"
                type="email"
                id="email"
                size="lg"
                placeholder="youremail@domain.com"
                onChange={handleChange}
                value={values.email}
                className={touched.email && errors.email ? 'error' : null}
              />
              {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null}
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="phone"
                type="phone"
                id="phone"
                size="lg"
                placeholder="Phone number"
                onChange={handleChange}
                value={values.phone}
                className={touched.phone && errors.phone ? 'error' : null}
              />
              {touched.phone && errors.phone ? (
                <div className="error-message">{errors.phone}</div>
              ) : null}
            </Form.Group>

            <Form.Group>
              <Form.Control
                name="boatType"
                type="text"
                id="boatType"
                size="lg"
                placeholder="Boat Model / Manufacturer"
                onChange={handleChange}
                value={values.boatType}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                name="boatLocation"
                type="text"
                id="boatLocation"
                size="lg"
                placeholder="Location of Boat (City / Marina)"
                onChange={handleChange}
                value={values.boatLocation}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                placeholder="Tell us about your project"
                size="lg"
                onChange={handleChange}
                value={values.description}
              />
            </Form.Group>
            
            <Button
              variant="primary"
              type="submit"
              size="lg"
              disabled={isSubmitting}
            >
              Get Quote
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default GetQuoteForm;
