import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../reducers/ProductReducer';

export default function ProductSellerForm() {
  const navigate = useNavigate();
  const selector = useSelector(state => state.UserReducer);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(
    {
      title: "",
      description: "",
      price: "",
      qty: "",
      userId: ""
    }
  );

  const [image, setImage] = useState(null);
  const imageref = useRef(null);
  const handleImage = (e) => setImage(e.target.files[0]);
  const userId = selector.loginUser.userId;
  
  const handleChange = (e) => {
    let { name, value } = e.target;
    setProduct({...product,[name]: value});
  };

  const insertProduct = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', product.title);
    data.append('description', product.description);
    data.append('price', product.price);
    data.append('qty', product.qty);
    data.append('image', image);
    console.log(data);
    console.log(product);

    try {
      if (userId == null) {
        alert('first login please...');
        navigate('/login');
      } else {
        const action = await dispatch(addProduct({product:data,userId}));
        console.log(action.payload);
        if ((Object.keys(action.payload)).length > 0) {navigate("/")}
        else {alert('sorry! something went wrong....')}
      }
    } catch (error) {console.log(error)}
  };

  return (
    <>
      <Form className='container' onSubmit={insertProduct}>
        <h2 style={{ margin: "25px 0px" }}>Product Detail</h2>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>product title</Form.Label>
          <Form.Control
            type="text"
            name='title'
            value={product.title}
            onChange={handleChange}
            placeholder="product title" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>product description</Form.Label>
          <Form.Control
            type="text"
            value={product.description}
            name='description'
            onChange={handleChange}
            placeholder="product description" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>upload Image</Form.Label>
          <Form.Control 
            type="File"
            name='image'
            placeholder="upload"
            onChange={handleImage}
            ref={imageref}
            required />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>quantity</Form.Label>
            <Form.Control
              type='number'
              value={product.qty}
              onChange={handleChange}
              name='qty' required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>price</Form.Label>
            <Form.Control
              type='number'
              value={product.price}
              onChange={handleChange}
              name='price' required />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>
  )
}