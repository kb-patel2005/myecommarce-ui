import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setProducts } from '../reducers/ProductReducer';
import ProductCard from './ProductCard';
import axios from 'axios';

export default function Home() {
  const dispatch = useDispatch();

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

  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(null);
  const pageSize = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (totalPages !== null && page >= totalPages) {
        clearInterval(interval); // Stop when all pages are fetched
        return;
      }

      axios.get(`https://docker-apis.onrender.com/products?page=${page}&size=${pageSize}`)
        .then(res => {
          const newData = res.data.content;
          setProduct(prev => [...prev, ...newData]);
          setPage(prev => prev + 1);
          setTotalPages(res.data.totalPages); // Set total pages from API response
        })
        .catch(err => {
          console.error('Error fetching page:', err);
          clearInterval(interval); // Stop on error
        });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [page, totalPages]);

  console.log(product);

  return (<>
    <div className='d-flex flex-wrap flex-direction-column justify-content-center align-items-center'>
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
