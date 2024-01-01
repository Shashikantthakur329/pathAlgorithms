import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Header.css'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

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
            <div className="home" style={centerDiv}>
                {/* <p className="btn">
                    <Link to="/grid">Sorting</Link>
                </p> */}
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
            </div>
        </>
    );
}
// export default ResponsiveAppBar;
export default Header