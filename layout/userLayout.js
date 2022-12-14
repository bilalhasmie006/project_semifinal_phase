import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserReducer } from '../store/user/user.selector'
function UserLayout({ childern }) {


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


  return <div>{childern}</div>;
}

export default UserLayout;
