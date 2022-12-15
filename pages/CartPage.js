import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectUserReducer } from '../store/user/user.selector';

const CartPage = () => {
  const { cartlist } = useSelector(selectUserReducer);
  //const dispatch = useDispatch();
  const [cartData, setcartData] = useState([]);
  // setproductData(cart.list};

  useEffect(() => {
    setcartData(cartlist);
    console.log(cartlist);
  }, []);


  useEffect(() => {
    setcartData(cartlist);
    console.log(cartlist);
  }, [cartlist]);

  return (
    <div>
      {/* {console.log('id' + cart.list[0].title)} */}

      <div className='my-10'>
        <div className='text-[30px] font-bold flex justify-center'>
          Cart Products
        </div>

        {cartData.map((post) => {
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
    </div>
  );
};

export default CartPage;
