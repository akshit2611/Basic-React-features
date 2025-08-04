import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Api from './components/Api';

const App = () => {
  return (
    <>
    <Header name="Vite React"/>
    <Card name="Hitesh Sharma"/>
    <Api />
    <Footer />
    </>
  )
}

export default App