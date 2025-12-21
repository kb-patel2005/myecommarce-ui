import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../reducers/CartReducer';

export default function Productdetail() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { state } = useLocation();

    async function addproduct() {
        let email = localStorage.getItem('email');
        try {
            await dispatch(addProductToCart({ email }))
            alert("Product added to cart successfully!");
            navigate("/cart", { state: { newProductItems } });
        }
        catch (error) {
            console.error("Error adding product to cart:", error);
            alert("Failed to add product to cart. Please try again." + error);
        }
    }

    return (
        <div className='flex justify-content-center align-items-center' style={{ width: '100vw', backgroundColor: '#f8f9fa', justifyItems: 'center' }}>
            <Card style={{ height: 'auto', width: '80vw', margin: '20px 0px', padding: '10px 0px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ textAlign: 'center', margin: '10px 0px', maxWidth: '500px' }}>
                    <Card.Img variant="top" src={`data:${state.imgContentType};base64,${state.imagedetail}`} style={{ width: '50%', height: 'auto', alignContent: 'center' }} />
                </div>
                <Card.Body>
                    <Card.Title>{state.title}</Card.Title>
                    <Card.Text>
                        {state.description}
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{state.price}</ListGroup.Item>
                    </ListGroup>
                    <Button variant="outline-primary" style={{ margin: '5px 15px' }} onClick={addproduct}>
                        add cart
                    </Button>
                    <Button variant="outline-primary" style={{ margin: '5px 15px' }}>Buy now</Button>
                </Card.Body>
            </Card>
        </div>

    )
}
