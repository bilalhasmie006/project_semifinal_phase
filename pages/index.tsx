import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LoginPage from './LoginPage';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {

  return (

    <div>
      <LoginPage/>
    </div>
  )
}

export default Home
