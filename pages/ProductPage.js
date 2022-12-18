import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import UserLayout from '../layout/UserLayout';
import { selectProductReducer } from '../store/product/product.selector';
import { selectUserReducer } from '../store/user/user.selector';
import { productScrapAsync } from '../store/product/product.action';
import {
  addtocart,
  delallfromcart,
  delfromcart,
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

  const delCartHandler = (post) => {
    dispatch(delfromcart(post));
  };

  const delallCartHandler = () => {
    dispatch(delallfromcart());
  };

  return (
    <div>
      <div className='flex justify-center text-[40px] my-2 font-bold'>
        Product List
      </div>
      {/* <button className='bg-red-700 h-10 w-60 ' onClick={check}>
            {loading?'loading':'Log In My Account'}
            you want to see products
          </button> */}
      {productData.map((post) => {
        const { id, title, price, description } = post;
        return (
          <div className='container mx-auto flex gap-5'>
            <div className='w-full shadow-xl p-2' key={post.id}>
              <h1 className='text-[30px] font-bold'>Product: {post.id}</h1>
              <p>Title: {post.title}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
              <button
                className='bg-blue-700 px-2 py-1 rounded'
                onClick={() => addCartHandler(post)}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}

      <div>
        <div className='container flex justify-center text-[40px] my-2 font-bold'>
          Products Added To CartList
        </div>
        {/* <button className='bg-red-700 h-10 w-60 ' onClick={check}>
            {loading?'loading':'Log In My Account'}
            you want to see products
          </button> */}

        <table class='container mx-auto table-auto '>
          <thead>
            <tr className='text-center text-[20px] flex flex-row '>
              <th className='basis-1/4'>Product ID</th>
              <th className='basis-1/4'>Title</th>
              <th className='basis-1/4'>Price</th>
              <th className='basis-1/4'>Delete From List</th>
            </tr>
          </thead>
          <tbody>
            {listData.map((post) => {
              const { id, title, price } = post;
              return (
                <div>
                  <tr className='text-center text-[20px] flex flex-row '>
                    <td className='basis-1/4'>{post.id}</td>
                    <td className='basis-1/4'>{post.title}</td>
                    <td className='basis-1/4'>{post.price}</td>
                    <td className='basis-1/4'>
                      <button
                        className='mx-auto flex bg-blue-700 px-2 py-1 rounded'
                        onClick={() => delCartHandler(post.id)}
                      >
                        Delete item
                      </button>
                    </td>
                  </tr>
                </div>
              );
            })}
          </tbody>
        </table>

        <div>
          <button
            className='mx-auto flex bg-red-700 px-20 py-1 my-2 rounded'
            onClick={() => delallCartHandler()}
          >
            clear All Cart Items
          </button>
        </div>
      </div>

      {/* <div
              className='container mx-auto flex flex-col justify-center'
              key={post.id}
            >
              <h1 className='text-[30px] font-bold'>Product: {post.id}</h1>
              <p>Title: {post.title}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
              <button
                className='mx-auto flex bg-blue-700 px-2 py-1 rounded'
                onClick={() => delCartHandler(post)}
              >
                Delete item
              </button>
            </div> */}
    </div>
  );
};

ProductPage.Layout = UserLayout;
export default ProductPage;
