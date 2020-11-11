import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import Navigation from '../components/Navigation';

const SignUpPage = ({ history }) => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const login = () => {
    axios
      .post('/api/users/login', formData)
      .then((res) => {
        history.push('/home');
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/users/', formData)
      .then((response) => {
        sessionStorage.setItem('user', response.data);
        setCurrentUser(response.data);
        login();
      })
      .catch((error) => swal('Error', 'Please check the inputs', 'warning'));
  };

  return (
    <>
      <Navigation />

      <Container className="signupcontainer container d-flex flex-column align-items-center justify-content-center fullscreen">
        <h2 className="title mb-2 text-left">Welcome to Cuenta!</h2>
        <h6 className="mb-4 text-left">
          As a Cuenta rewards member you'll earn exclusive discounts, offers,
          access to giveaways and more.
        </h6>
        <Form style={{ width: 300 }} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="fullName">Full Name</Form.Label>
            <Form.Control
              id="fullName"
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
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
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Yes, I would like to receive Cuenta email updates."
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button id="button" variant="dark" type="submit" block>
              Create Account
            </Button>
          </Form.Group>
        </Form>
        <Link className="mt-2" to="/login">
          Already a member? Login.
        </Link>
      </Container>
    </>
  );
};

export default SignUpPage;
