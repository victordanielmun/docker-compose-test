import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Categorias from '../pages/Categorias';
import Contacto from '../pages/Contacto';
import About from '../pages/About';
import Products from '../pages/Products';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/categorias' element={<Categorias />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

export default Layout
