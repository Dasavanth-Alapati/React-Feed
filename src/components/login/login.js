import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as  Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required').min(3, 'Too Short!'),
  password: Yup.string().required('Password is required'),
})


const Login = () => {
  const navigate = useNavigate()
  return (

    <Container className="m-5">
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values,{setSubmitting}) => {
          setSubmitting(true);
          console.log(values);
          setSubmitting(false);
          navigate('/feed');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setSubmitting,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type={"text"}
                name="username"
                placeholder="Enter Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                isInvalid={touched.username && !!errors.username}
              />
              <Form.Control.Feedback type='invalid'>{errors.username}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={"password"}
                name='password'
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                isInvalid={touched.password && !!errors.password}
              />
              <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={setSubmitting}>Login</Button>
          </Form>
        )
        }
      </Formik>
    </Container>);
}


export default Login;