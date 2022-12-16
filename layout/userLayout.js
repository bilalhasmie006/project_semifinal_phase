import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserReducer } from '../store/user/user.selector'


function UserLayout({ children }) {


  const router=useRouter()
  const {user,loading}=useSelector(selectUserReducer);

  useEffect(()=>{

    if(!user?.username && !loading){
      router.push('/LoginPage')
    }

  },[user?.username,loading])


  if(loading){
    return <h1>Loading...</h1>
  }


  return <div>{children}</div>;
}

export default UserLayout;
