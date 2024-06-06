import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Category from '../components/Category'


function Categories() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      <Category/>
    </div>
    <Footer/>
    </>
  );
}

export default Categories;