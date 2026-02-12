import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setProducts } from '../reducers/ProductReducer';
import ProductCard from './ProductCard';
import axios from 'axios';

export default function Home() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(null);
  const pageSize = 3;
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(setProducts());
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await axios.get(
          `https://docker-apis.onrender.com/products?page=${page}&size=${pageSize}`
        );

        setProduct(prev => [...prev, ...res.data.content]);
        setTotalPages(res.data.totalPages);

        // After rendering this page, raise the flag
        setFlag(true);
      } catch (err) {
        console.error('Error fetching product', err);
      }
    };

    if (totalPages === null || page < totalPages) {
      fetchPage();
    }
  }, [page]);

  // When flag is raised, move to next page
  useEffect(() => {
    if (flag) {
      if (page + 1 < totalPages) {
        setPage(prev => prev + 1);
      }
      setFlag(false); // reset flag
    }
  }, [flag, totalPages, page]);

  return (<>
    <div className='d-flex flex-wrap gap-3 flex-direction-column justify-content-center align-items-center'>
      {product.map((data, i) =>
      (
        <ProductCard
          key={data.pId}
          title={data.title}
          description={data.description}
          price={data.price}
          qty={data.qty}
          imgContentType={data.imgContentType}
          image={data.imagedetail}
          data1={data}
        />
      ))
      }
    </div>
  </>
  )
}
