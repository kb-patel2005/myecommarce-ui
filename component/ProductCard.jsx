import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../reducers/UserReducer';

export default function ProductCard({ title, description, price, qty, image, imgContentType, data1 }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state.UserReducer);

  const [like, setIsLiked] = useState(false);

  const [product, setProduct] = useState({
    productId: data1.pId,
    quantity: 1
  });

  return (
    <Card className="shadow-sm border-0 rounded-4 overflow-hidden" style={{ maxWidth: '280px' }}>
      {/* Image Placeholder */}
      <div className="position-relative bg-light d-flex align-items-center justify-content-center">
        <Link to='/productdetail' state={{title, description, price, qty, image, imgContentType, data1}}>
        <div className="text-center text-secondary">
          <div className="small fw-bold text-uppercase ls-1 text-muted" >
            <img
              style={{ height: "230px" }}
              src={`https://docker-apis.onrender.com/image/${image}`}></img>
          </div>
        </div>
        </Link>
        <Button
          variant="light"
          className="position-absolute top-0 end-0 m-3 rounded-circle p-0 d-flex align-items-center justify-content-center shadow-sm"
          style={{ width: '36px', height: '36px', backgroundColor: 'rgba(255,255,255,0.9)', color: 'black' }}
          onClick={() => setIsLiked(!like)}
        >
          {like ? "❤️" : "🖤"}
        </Button>
      </div>

      <Card.Body className="d-flex flex-column p-2">
        <div className="mb-2">
          <Card.Title className="fw-bold mb-1 text-truncate" title={title}>{title}</Card.Title>
          <Card.Text className="text-muted small " style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {description}
          </Card.Text>
        </div>

        <div className="d-flex align-items-center">

          <div className="d-flex me-2">
            {[...Array(Math.floor(3.2))].map((_, i) => (
              <span key={i} className="me-1">
                ⭐
              </span>
            ))}
            {[...Array(Math.ceil(1.8))].map((_, i) => (
              <span key={i} className="dark text-muted mx-1">
                <h5>★</h5>
              </span>
            ))}
          </div>

          <small className="text-muted">reviews</small>
        </div>

        <div className="mt-auto d-flex justify-content-between align-items-center border-top pt-3">
          <div className="d-flex flex-column lh-sm">
            <span className="h5 fw-bold mb-0">${price - price * 0.25}</span>

            <small className="text-muted text-decoration-line-through">${price}</small>

          </div>
          <Button variant="outline-dark"
            onClick={() => {
              if (Object.keys(selector.loginUser).length > 0) {
                console.log(product);
                dispatch(addToCart(product));
                alert("add product");
              } else {
                navigate("/login");
              }
            }
            }>
            🛒 ADD
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}


