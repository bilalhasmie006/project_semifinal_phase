import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function UserLayout({ childern }) {


  const router=useRouter()
  const {user,loading}=useSelector(selectUserReducer);

  useEffect(()=>{

    if(!user?.username && !loading){
router.push('/login')
    }

  },[user?.username,loading])


  if(loading){
    return <h1>Loading...</h1>
  }


  return <div>{childern}</div>;
}

export default UserLayout;
