import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import {
  // userLoginStart,
  // userLoginSuccess,
  // userLoginFailure,

  addtocart,
} from '../store/user/user.action';

const CartPage = () => {
  const {list} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [productData, setproductData] = useState([]);
  // setproductData(cart.list};

  return (
    <div>
      {console.log("id"+ cart.list[0].title)}
    {productData.map((post) => {
      const { id, title, price, description, image } = post;
      return (

    <div className='my-10'>
      <div className='text-[30px] font-bold flex justify-center'>
        Cart Product
      </div>
      <div className='container mx-auto flex flex-col gap-10 justify-center'>
            <div key={post.id}>
              <h1 className='text-[30px] font-bold'>Product {post.id}</h1>
              <p>Title: {post.title}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
    </div>
    </div>
    </div>
    );
  })}
 </div>
  );
};

export default CartPage;
