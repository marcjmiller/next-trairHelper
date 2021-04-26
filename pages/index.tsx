import Head from 'next/head';
import React from 'react';
import DevsPane from '../components/devsPane';
import Footer from '../components/footer';
import Header from '../components/header';
import RolesPane from '../components/rolesPane';

const Home = () => {
  return (
    <div className='flex flex-col justify-between w-screen h-screen'>
      <Head>
        <title>Trair Helper - NextJS</title>
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
      <Header />
      <div className={'flex flex-col items-center h-full py-8 px-16'}>
        <div className={'flex justify-evenly bg-green-100 w-full h-full'}>
          <DevsPane />
          <RolesPane />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
