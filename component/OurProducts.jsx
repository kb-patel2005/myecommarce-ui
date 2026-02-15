import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById } from '../reducers/ProductReducer';

export default function OurProducts() {
    const selector = useSelector((state) => state.UserReducer);
    const dispatch = useDispatch();

    return (
        <div>
            {
                selector.loginUser.productitems.map(async (productData, i) => {
                    const data = await dispatch(fetchProductById(productData.productId));
                    return (
                        <>
                            <Container>
                                <Row>
                                    <Col sm={3}>
                                        <img
                                            src={`https://docker-apis.onrender.com/image/${productData.pId}`}
                                            style={{ height: "150px", width: "100%", margin: "0", padding: "0", maxWidth: "15  0px" }}
                                            alt="product"
                                        />
                                    </Col>
                                    <Col sm={4}>
                                        <p>{data.title}</p>
                                        <p>{data.description}</p>
                                    </Col>
                                    <Col sm={5}>
                                        <Row>
                                            <Col>{data.qty}</Col>
                                            <Col>total price</Col>
                                            <Col>Delete</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )
                })
            }
        </div>
    )
}
