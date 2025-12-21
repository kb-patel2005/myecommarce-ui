import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { saveCartItemsInDB } from '../reducers/UserReducer';
import { fetchProductById } from '../reducers/ProductReducer';
import { useNavigate } from 'react-router';
import CartCard from './CartCard';
import { current } from '@reduxjs/toolkit';

export default function CartPage() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.UserReducer);
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const fetchItems = (products) => {
    products.map(async (data) => {
      const prod = await dispatch(fetchProductById(data.productId)).unwrap();
      if (Object.keys(prod).length > 0) {
        setProduct(prev => [...prev, { ...prod, qty: data.quantity }]);
      }
    });
  }

  useEffect(() => {
    fetchItems(selector.userProducts);
  }, [dispatch]);

  const deleteFromProduct = (e) => {
    setProduct((prev) => prev.filter(item => item.pId !== e));
    console.log(product);
    console.log(selector.loginUser);
  }

  function findIndexById(arr, id) {
    return arr.findIndex(item => item.pId === id);
  }

  const incrementFromProduct = (e) => {
    const index = findIndexById(product, e);
    setProduct(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, qty: item.qty + 1 } : item
      )
    );
    // setProduct((prev) => prev.map((item) => item.pId == e ? { ...item, qty: item.qty + 1 } : item));
  }

  const decrementFromProduct = (e) => {
    const index = findIndexById(product, e);
    if (product[index].qty > 1) {
      setProduct(prev =>
        prev.map((item, i) =>
          i === index ? { ...item, qty: item.qty - 1 } : item
        )
      );
    } else {
      deleteFromProduct(e);
    }
    // setProduct((prev) => prev.map((item) => item.pId == e ? (item.qty > 1 ? { ...item, qty: item.qty - 1 } :  ) : item));
  }

  return (
    <>
      <div className="d-flex flex-wrap flex-direction-row justify-content-center align-items-center mt-2">

        <Container>
          <Row>
            <Col sm={10}></Col>
            <Col sm={2}><Button variant="primary" onClick={() => { dispatch(saveCartItemsInDB()) }}>Save Changes</Button></Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col sm={4}><b>Description</b></Col>
            <Col sm={5}>
              <Row>
                <Col><b>Quantity</b></Col>
                <Col><b>Price</b></Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
          <Row><hr /></Row>
        </Container>
        {
          Object.keys(selector.loginUser).length > 0 ? (
            Object.keys(product).length > 0 ?
              product.map((data, i) =>
                <CartCard
                  key={i}
                  title={data.title} description={data.description} productId={data.pId} qty={data.qty} price={data.price}
                  deletefunc={deleteFromProduct} incrementfunc={incrementFromProduct} decrementfunc={decrementFromProduct}
                />) : "")
            : navigate('/login')
        }

        <Container>
          <Row>
            <hr />
          </Row>
          <Row>
            <Col sm={7}></Col>
            <Col sm={5}>
              <Row>
                <Col><b>Total amount</b></Col>
                <Col>{
                  product.reduce((acc, current) => acc + (current.price * current.qty), 0)
                }</Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* <div style={{display:'flex',justifyContent:'flex-end'
    }}>
      
    </div> */}
      </div>

    </>
  );
}