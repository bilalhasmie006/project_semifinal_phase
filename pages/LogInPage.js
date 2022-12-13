import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/services/user/user.services';
// import selectUserReducer from '/store/user/user.selector';

import {
  // userLoginStart,
  // userLoginSuccess,
  // userLoginFailure,
  userLoginStartAsync,
} from '../store/user/user.action';




const LogInPage = () => {
  const [inputId, setinputId] = useState('');
  const [inputPassword, setinputPassword] = useState('');
  const list = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const { user, error, message, loading } = useSelector(selectUserReducer);
  const check = () => {
    console.log("button is working")

  //  const data = {
  //     identifier: 'Bilal Rasool',
  //     password : 'bila',
  //     phone: '032010101010',
  //   },
   
  // dispatch(userLoginStartAsync((data) => {
  //   data.identifier=inputId,
  //   data.password=inputPassword,
  // }));
  // dispatch(userLoginStartAsync((data)))
  // dispatch(
  //   userLoginStartAsync((Data(inputId))))
  dispatch(
    userLoginStartAsync({
      // :
      // :
    })
  );
  };

  //  const userLoginStartAsync = (inputId1,inputPassword1) => {
  //   return async (dispatch) => {
  //     dispatch(userLoginStart());

  //     try {
  //       const res = await login(inputId1,inputPassword1);
  
  //       dispatch(
  //         userLoginSuccess({
  //           data: res.data,
  //           message: res.message,
  //         })
  //       );
  //     } catch (error) {
  //       dispatch(userLoginFailed(data.message));
  //     }
  //   };
  
  // };


  return (
    <div>
      <div className='flex justify-center my-60 gap-3 '>
        <div>
          <input
            className='h-10 w-60 '
            type='text'
            value={inputId}
            placeholder='Enter Your ID'
            onChange={(e) => setinputId(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className='h-10 w-60 '
            type='password'
            value={inputPassword}
            placeholder='Enter Your Password '
            onChange={(e) => {setinputPassword(e.target.value)}}
          ></input>
          <h1>{console.log("loading"+ list.loading)}</h1>
        </div>
        <div>
          <button className='bg-red-700 h-10 w-60 ' onClick={check}>
            Log In My Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
