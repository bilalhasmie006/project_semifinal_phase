import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import UserLayout from '../layout/UserLayout';
import { selectProductReducer } from '../store/product/product.selector';
import { selectUserReducer } from '../store/user/user.selector';
import { productScrapAsync } from '../store/product/product.action';
import { addtocart } from '../store/user/user.action';
import { deleteCart } from '../store/user/user.action';
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
  // useEffect(() => {
  //    setlistData(cartlist);
  // }, [cartlist]);

  useEffect(() => {
    dispatch(productScrapAsync());
  }, []);

  useEffect(() => {
    setproductData(list);
  }, [list]);

  const addCartHandler = (post) => {
    dispatch(addtocart(post));
  };
  function remove(post)
  {
    dispatch(deleteCart(post));
  }
  return (
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
  <div className='flex flex-col'>
        <h1>products added to cartList</h1>
        <h1 className='flex justify-center text-[30px] font-bold '>Total Items:{cartlist.length}</h1>
        </div>
      </div>
      {/* <button className='bg-red-700 h-10 w-60 ' onClick={check}>
            {loading?'loading':'Log In My Account'}
            you want to see products
          </button> */}
        {cartlist.map((post) => {
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
              <button className='bg-blue-700 px-2 py-1' onClick={()=>remove(post.id)}>Delete</button>
            </div>
          );
        })}

    </div>
  );
};

ProductPage.Layout=UserLayout;
export default ProductPage;
