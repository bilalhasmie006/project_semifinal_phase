import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import UserLayout from '../layout/userLayout';
import { selectProductReducer } from '../store/product/product.selector';
import { selectUserReducer } from '../store/user/user.selector';
import { productScrapAsync } from '../store/product/product.action';
import { addtocart } from '../store/user/user.action';
//   // userLoginStart,
//   // userLoginSuccess,
//   // userLoginFailure,
//   addtocart,
// } from '../store/user/user.action';

const ProductPage = () => {
  //   const fetchProducts = async () => {
  //     const response = await axios
  //       .get('https://fakestoreapi.com/products')
  //       .catch((error) => {
  //         console.log('error', error);
  //       });
  //     console.log(response.data);
  //   };
  // const list = useSelector((state) => state.user);
  const { list } = useSelector(selectProductReducer);
  const dispatch = useDispatch();
  const [productData, setproductData] = useState([]);
  const [listData, setlistData] = useState([]);
//experiment:
const { cartlist } = useSelector(selectUserReducer);




  // useEffect(() => {
  //   // await
  //   axios
  //     .get('https://fakestoreapi.com/products')
  //     .then((res) => {
  //       setproductData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
     setlistData(cartlist);
  }, [cartlist]);

  useEffect(() => {
    dispatch(productScrapAsync());
  }, []);

  useEffect(() => {
    setproductData(list);
  }, [list]);

  const addCartHandler = (post) => {
    dispatch(addtocart(post));
  };

  return (
    // <UserLayout>
    <div>
      <div className='flex justify-center text-[30px] font-bold'>
        Product List
      </div>
      {/* <button className='bg-red-700 h-10 w-60 ' onClick={check}>
            {loading?'loading':'Log In My Account'}
            you want to see products
          </button> */}
      {productData.map((post) => {
        const { id, title, price, description } = post;

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
                onClick={() => addCartHandler(post)}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}

<div className='flex justify-center text-[30px] font-bold'>
        products added to cartList
      </div>
      {/* <button className='bg-red-700 h-10 w-60 ' onClick={check}>
            {loading?'loading':'Log In My Account'}
            you want to see products
          </button> */}
        {listData.map((post) => {
          const { id, title, price, description } = post;
          return (
            <div
              className='container mx-auto flex flex-col gap-10 justify-center'
              key={post.id}
            >
              <h1 className='text-[30px] font-bold'>Product {post.id}</h1>
              <p>Title: {post.title}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
            </div>
          );
        })}

    </div>
    // </UserLayout>
  );
};

export default ProductPage;
