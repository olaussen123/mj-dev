// src/pages/_app.tsx

import { Component } from 'react';
import '../app/globals.css';
import NavBar from '../components/NavBar';

const MyApp = () =>{
  return (
    <div>
      <NavBar />
      <Component/>
    </div>
  );
}

export default MyApp;
