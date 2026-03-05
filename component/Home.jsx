import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';

export default function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let page = 0;
      let totalPages = 1;

      while (page < totalPages) {
        const response = await axios.get(
          `https://docker-apis.onrender.com/products?page=${page}&size=3`
        );
        setProduct(prev => [...prev, ...response.data.content]);
        totalPages = response.data.totalPages;
        page++;
      }
    };

    fetchProducts();
  }, []);

  console.log(product)

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
