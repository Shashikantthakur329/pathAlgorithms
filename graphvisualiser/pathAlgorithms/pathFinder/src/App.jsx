import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react';
import Grid from './Grid'
import Button from '@mui/material/Button';
import Header from './Header'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  // const Home = () => <div>This is the Home page!</div>;
  const Temp = () => <div>This is the About page!</div>;

  return (
    <>
      {/* <Button variant="contained">Hello world</Button>
      <br></br>
      <br></br>
      <Grid/> */}
      {/* <Header></Header> */}



      <Routes>
            <Route exact path="/" element={<Header />} />
            <Route path="/grid" element={<Grid />} />
            <Route path="/test" element={<Header />} />
            
      </Routes >
    </>
  )
}

export default App
