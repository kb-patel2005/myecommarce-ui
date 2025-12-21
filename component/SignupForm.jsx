import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { userInsertion } from '../reducers/UserReducer';

export default function SignupForm() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState(
    {
      email: "",
      password: "",
      address: "",
      city: "",
      zip: ""
    }
  )

  const handleChange = (e) => {
    let { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value
    })
  }

  const userInsert = async () => {
    const action = await dispatch(userInsertion(formdata));
    console.log(action.payload);
    alert(action.payload);
    if(action.payload){
      alert("regiser sucessfully......");
      navigate('/login');
    }else{
      alert("email is already exist.....");
    }
    
    
  }

  return (
    <>
      <Form className='container' onSubmit={(e)=>{
        e.preventDefault();
        userInsert();
        }}>
        <h5>welcome our side...</h5>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" 
          name='email' 
          placeholder="Enter email" 
          onChange={handleChange}
          value={formdata.email} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
           name='password' 
           placeholder="Password" 
           onChange={handleChange}
           value={formdata.password} required />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control type="Address" 
          name='address' 
          placeholder="1234 Main St"
          onChange={handleChange} 
          value={formdata.address} required />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control type='text' 
            name='city' 
            onChange={handleChange}
            value={formdata.city} required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control type='number' 
            name='zip'
            onChange={handleChange} 
            value={formdata.zip} required />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}