import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import * as  Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { fetchProfile, login } from '../services/api';
import { useDispatch } from 'react-redux';
import { setProfile } from '../redux/slices/profileSlice';



const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required').min(3, 'Too Short!'),
  password: Yup.string().required('Password is required'),
})


const Login = (props) => {
  const navigate = useNavigate()
  const [badLogin, setBadLogin] = useState(<></>);
  const dispatch = useDispatch();
  return (

    <Container className="d-flex justify-content-center mt-5">
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, { resetForm }) => {
          await login(values).then(async () => {
            navigate('/feed');
            props.setLoggedIn(true);
            await fetchProfile().then((res) => {
              dispatch(setProfile(res.data));
            })
          }).catch((err) => {
            console.log(err);
            if (err.code === 'ERR_NETWORK')
              setBadLogin(<Alert variant='danger' onClose={() => setBadLogin(<></>)} dismissible>Server Error</Alert>);
            else if (err.code === 'ERR_BAD_REQUEST')
              setBadLogin(<Alert variant='danger' onClose={() => setBadLogin(<></>)} dismissible>invalid Credentials</Alert>);
            resetForm();
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,

        }) => (
          <Form noValidate onSubmit={handleSubmit} style={{ width: '50%' }}>
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
            {badLogin}
            <Button variant="primary" type="submit" >Login</Button>

          </Form>

        )
        }
      </Formik>
    </Container>);
}


export default Login;