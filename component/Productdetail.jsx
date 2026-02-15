import React, {useState} from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../reducers/CartReducer';
import { addToCart } from '../reducers/UserReducer';

export default function Productdetail() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { state } = useLocation();
    const selector = useSelector((state) => state.UserReducer);
    const [product, setProduct] = useState({
        productId: state.data1.pId,
        quantity: 1
      });

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
        <>
            <Container fluid className="py-4">
                <Row>
                    {/* Left side: product images */}
                    <Col md={4} className="d-flex flex-column align-items-center">
                        <Image
                            src={`https://docker-apis.onrender.com/image/${state.image}`}
                            fluid
                            rounded
                            className="mb-3"
                        />
                        <Row className="g-2 justify-content-center">
                            <Col xs={2}>
                                <Image src={`https://docker-apis.onrender.com/image/${state.image}`} fluid rounded />
                            </Col>
                            <Col xs={2}>
                                <Image src={`https://docker-apis.onrender.com/image/${state.image}`} fluid rounded />
                            </Col>
                            <Col xs={2}>
                                <Image src={`https://docker-apis.onrender.com/image/${state.image}`} fluid rounded />
                            </Col>
                            <Col xs={2}>
                                <Image src={`https://docker-apis.onrender.com/image/${state.image}`} fluid rounded />
                            </Col>
                        </Row>
                    </Col>

                    {/* Right side: product details */}
                    <Col md={6} className="d-flex flex-column gap-3">
                        <h1 className="fw-bold">{state.title}</h1>
                        <p className="text-muted">{state.description}</p>

                        {/* Price */}
                        <div className="d-flex align-items-baseline gap-3">
                            <span className="fs-3 fw-bold">Rs. {state.price - ((state.price)*0.25)}</span>
                            <span className="text-decoration-line-through text-secondary">
                                Rs. {state.price}
                            </span>
                            <span className="fs-5 text-success">(25% off)</span>
                        </div>

                        {/* Sizes */}
                        <div>
                            <h5 className="fw-bold">Select Size</h5>
                            <div className="d-flex gap-2 mt-2">
                                {["XS", "S", "M", "L", "XL"].map((size) => (
                                    <Button
                                        key={size}
                                        variant="outline-secondary"
                                        className="rounded-circle"
                                        style={{ width: "50px", height: "50px" }}
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Colors */}
                        <div>
                            <h5 className="fw-bold">Select Color</h5>
                            <div className="d-flex gap-2 mt-2">
                                <div
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "5px",
                                        background: "#C4C4C4",
                                    }}
                                />
                                <div
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "5px",
                                        background: "#00398F",
                                    }}
                                />
                                <div
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "5px",
                                        background: "#299E00",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Offers */}
                        <div>
                            <h5 className="fw-bold">Best Offers</h5>
                            <p>
                                <strong>Special offer</strong> get 25% off{" "}
                                <span className="text-primary">T&amp;C</span>
                            </p>
                            <p>
                                <strong>Bank offer</strong> get 30% off on Axis Bank Credit card{" "}
                                <span className="text-primary">T&amp;C</span>
                            </p>
                            <p>
                                <strong>Wallet offer</strong> get 40% cashback via Paytm wallet on
                                first transaction <span className="text-primary">T&amp;C</span>
                            </p>
                        </div>

                        {/* Add to Cart */}
                        <Button variant="primary" className="mt-3 w-50" onClick={() => {
                            if (Object.keys(selector.loginUser).length > 0) {
                                console.log(product);
                                dispatch(addToCart(product));
                                alert("add product");
                            } else {
                                navigate("/login");
                            }
                        }}>
                            Add to Cart
                        </Button>
                    </Col>
                </Row>
            </Container>
             
            </>
)}