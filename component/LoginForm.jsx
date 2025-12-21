import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router';
import { useDispatch} from 'react-redux';
import { loginUser } from '../reducers/UserReducer';

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState(
    {
      email: "",
      password: ""
    }
  )

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const loginUserData = async (data) => {
    console.log("login process....");
    const action = await dispatch(loginUser(data));
    if (action.payload === "") {alert("incorrect user name password"); } 
    else {
      alert("login successfully");
      navigate('/');
    }

  }


  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        loginUserData(data);
      }}
      className='container bgborder p-5'>

      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name='email'
          value={data.email}
          onChange={handleChange}
          placeholder="Enter email" required />
      </Form.Group>

      <br></br>
      <Form.Group controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name='password'
          value={data.password}
          onChange={handleChange}
          placeholder="Password" required />
      </Form.Group>
      <br></br>
      <Button as="input" type="submit" value="Submit" />
      <hr />
      <center><h5>for new user <Link to={'/signup'}>signup</Link></h5></center>
    </Form>

  );
}

