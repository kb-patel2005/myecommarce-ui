import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { fetchProductById } from '../reducers/ProductReducer';
import { useNavigate } from 'react-router';
import { Container, Row, Col, Card } from "react-bootstrap";
import CartCard from './CartCard';
import PayButton from './PayButton';

export default function CartPage() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.UserReducer);
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  let totalAmount = product.reduce((acc, current) => acc + (current.price * current.qty), 0);

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
      
      {/* import { Container, Row, Col, Card } from "react-bootstrap"; */}

<div className="mt-2">
  <h3 style={{ width: '50%', margin: 'auto', minWidth: '400px' }}>YOUR CHOOSED PRODUCTS</h3>
  <Container fluid>
    <Row className="flex-wrap">
      {/* Cart Items */}
      <Col xs={12} lg={8} className="d-flex flex-column align-items-center">
        {Object.keys(selector.loginUser).length > 0 ? (
          Object.keys(product).length > 0 ? (
            product.map((data, i) => (
              <CartCard
                style={{ width: "100%", maxWidth: "500px" }}
                key={i}
                title={data.title}
                description={data.description}
                productId={data.pId}
                image={data.imagedetail}
                qty={data.qty}
                price={data.price}
                deletefunc={deleteFromProduct}
                incrementfunc={incrementFromProduct}
                decrementfunc={decrementFromProduct}
              />
            ))
          ) : (
            ""
          )
        ) : (
          navigate("/login")
        )}
      </Col>

      {/* Order Summary */}
      <Col xs={12} lg={4}>
        <Card
          className="border-0 shadow-sm bg-light sticky-top"
          style={{ top: "80px", zIndex: 100 }}
        >
          <Card.Body className="p-4">
            <h4 className="mb-4">Order Summary</h4>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Subtotal</span>
              <span className="fw-bold">${totalAmount.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Shipping</span>
              <span className="text-success">Free</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-4">
              <span className="h5 fw-bold">Total</span>
              <span className="h5 fw-bold">${totalAmount.toFixed(2)}</span>
            </div>
            <PayButton amount={parseInt(totalAmount) + ".00"} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
    </>
  );
}