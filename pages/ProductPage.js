import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';

import {
  // userLoginStart,
  // userLoginSuccess,
  // userLoginFailure,
  addtocart,
} from '../store/user/user.action';



const ProductPage = () => {
  //   const fetchProducts = async () => {
  //     const response = await axios
  //       .get('https://fakestoreapi.com/products')
  //       .catch((error) => {
  //         console.log('error', error);
  //       });
  //     console.log(response.data);
  //   };
  const list = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [productData, setproductData] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setproductData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addCartHandler = () => {
    
    dispatch(addtocart((productData)))
  };


  return (
    <div>
      <div className='flex justify-center text-[30px] font-bold'>
        Product List
      </div>
      {productData.map((post) => {
        const { id, title, price, description, image } = post;

        // const addCartHandler = () => {
        //   console.log('Product is', post.id, 'has title', post.title);
          
        //   // dispatch(userscart((productData)))
        // };

        return (
          <div className='container mx-auto flex flex-col gap-10 justify-center'>
            <div key={post.id}>
              <h1 className='text-[30px] font-bold'>Product {post.id}</h1>
              <p>Title: {post.title}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
              <button
                className='bg-blue-700 px-2 py-1'
                onClick={addCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;
