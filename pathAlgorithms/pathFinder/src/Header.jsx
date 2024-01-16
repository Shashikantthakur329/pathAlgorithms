import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Header.css'

import * as React from 'react';
import Button from '@mui/material/Button';
import BubbleAnimation from './Animations'
const pages = ['Sorting', 'Searching'];
const settings = ['Account', 'Dashboard', 'Logout'];

function Header() {
    const centerDiv = {
        display: 'flex',
        // alignItems: 'center',
        marginTop:'200px',
        justifyContent: 'center',
        // height: '100vh',
        gap: '100px',
    };

    // const btnCss = {
        
    // };

    return (
        <>
            <BubbleAnimation></BubbleAnimation>
            {/* <div className="home" style={centerDiv}>
                <Button variant="contained" className='btn'>
                    <Link to="https://shashikantthakur329.github.io/sorting_visualizer/">
                        Sorting
                    </Link>
                </Button>
                <Button variant="contained" className='btn'>
                    <Link to="/grid">
                        Searching
                    </Link>
                </Button>
            </div> */}
        </>
    );
}
// export default ResponsiveAppBar;
export default Header