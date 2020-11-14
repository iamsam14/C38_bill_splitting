import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import Navigation from '../components/Navigation';

const Login = ({ history }) => {
  const { currentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/users/login', formData).then((response) => {
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data);
      history.push('/home');
    });
  };

  return (
    <>
      <Navigation />

      <Container className="logincontainer d-flex flex-column align-items-center justify-content-center fullscreen">
        <h3 className="title">Welcome back!</h3>
        <h6 className="ml-2 mr-4 mb-4 mt-1">
          Make sure to checkout your daily rewards and discounts in your
          dashboard
        </h6>
        <Form style={{ width: 300 }} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button id="button" variant="dark" type="submit" block>
              Login
            </Button>
          </Form.Group>
          <Form.Group>
            <Link className="mb-5" to="/reset-password">
              Forgot password?
            </Link>
          </Form.Group>
          <Form.Group>
            <Link to="/signup">Need an Account? Sign up.</Link>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Login;
