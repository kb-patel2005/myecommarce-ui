import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { decrementProduct, deleteToCart, incrementProduct } from '../reducers/UserReducer';

export default function CartCard({ title ,description ,qty ,productId ,price,deletefunc,incrementfunc,decrementfunc}) {
    const dispatch = useDispatch();
    return (
        <>
            <Container>
                <Row>
                    <Col sm={3}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xf4kIusbGklkMbsv9bN-TBmPCxgQZG9LtA&s"
                            style={{ height: "150px", width: "100%", margin: "0", padding: "0", maxWidth: "15  0px" }}
                            alt="product"
                        />
                    </Col>
                    <Col sm={4}>
                        <p>{title}</p>
                        <p>{description}</p>
                    </Col>
                    <Col sm={5}>
                        <Row>
                            <Col>
                            <Button
                            onClick={()=>{
                                dispatch(incrementProduct(productId));
                                incrementfunc(productId);
                            }} 
                            className='m-1'>+</Button>
                            {qty}
                            <Button
                            onClick={()=>{
                                dispatch(decrementProduct(productId));
                                decrementfunc(productId);
                            }}
                            className='m-1'>-</Button>
                            </Col>
                            <Col>{qty*price}</Col>
                            <Col>
                                <Button variant='danger' onClick={()=>{
                                    dispatch(deleteToCart(productId));
                                    deletefunc(productId);
                                    }}>delete</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
