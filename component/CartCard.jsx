import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { decrementProduct, deleteToCart, incrementProduct } from '../reducers/UserReducer';
import { Link } from 'react-router';
import { Navigate } from 'react-router';

export default function CartCard({
  title,
  description,
  qty,
  productId,
  image,
  price,
  deletefunc,
  incrementfunc,
  decrementfunc
}) {
  const dispatch = useDispatch();

  return (
    <Card className="mb-3 p-2"  style={{border:'none'}}>
      <Container fluid>
        <Row className="align-items-center">
          {/* Image Section */}
          <Col xs={10} sm={4} md={3} className="text-center mb-3 mb-sm-0">
              <img
                src={`https://docker-apis.onrender.com/image/${image}`}
                style={{
                  height: "150px",
                  width: "auto",
                  maxWidth: "100%",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
                alt="product"
              />
          </Col>

          {/* Product Info */}
          <Col xs={12} sm={8} md={5}>
            <h5 className="mb-1">{title}</h5>
            <p className="text-muted mb-2">{description}</p>
            <p className="fw-bold">₹{price}</p>
          </Col>

          {/* Actions */}
          <Col xs={12} md={4}>
            <Row className="align-items-center text-center">
              <Col xs={12} sm={6} className="mb-2 mb-sm-0">
                <Button
                  onClick={() => {
                    dispatch(incrementProduct(productId));
                    incrementfunc(productId);
                  }}
                  className="m-1"
                  size="sm"
                >
                  +
                </Button>
                <span className="mx-2">{qty}</span>
                <Button
                  onClick={() => {
                    dispatch(decrementProduct(productId));
                    decrementfunc(productId);
                  }}
                  className="m-1"
                  size="sm"
                >
                  -
                </Button>
              </Col>
              <Col xs={12} sm={3} className="fw-bold">
              
              <div className='d-flex align-items-center'>
                <div className='m-3'>{qty * price}</div>
                <div
                  style={{cursor:'pointer',fontSize:'30px'}}
                  onClick={() => {
                    dispatch(deleteToCart(productId));
                    deletefunc(productId);
                  }}
                >
                  ×
                </div>
              </div>
                
                
              </Col>
              
            </Row>
          </Col>
        </Row>
      </Container>
    </Card>
    
  );
}