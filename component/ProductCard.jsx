import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../reducers/UserReducer';

export default function ProductCard({ title, description, price, qty,image,imgContentType, data1}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state)=>state.UserReducer);

  const [product , setProduct] = useState({
    productId: data1.pId,
    quantity: 1
  });

  return (
    <div style={{ width: '250px' }}>
    <Link className='linkstyle'>
      <Card >
        <Card.Img variant="top" className='imageOfCard' src={`data:${imgContentType};base64,${image}`}/>
        <Card.Body style={{height:"95px", margin:"0px 0px"}}>
          <Card.Title style={{margin:"0px 0px 0px 0px"}}>{title}</Card.Title>
          <Card.Text>
            {description.length>57?description.slice(0, 57)+"...":description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price : {price}</ListGroup.Item>
        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Button 
            onClick={()=>{
              if(Object.keys(selector.loginUser).length>0 ){ 
                console.log(product);
                dispatch(addToCart(product));
                alert("add product");
               }else{
                navigate("/login");
               } 
            }}
            variant="primary">Add cart</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Link>
    </div>
  );
}


