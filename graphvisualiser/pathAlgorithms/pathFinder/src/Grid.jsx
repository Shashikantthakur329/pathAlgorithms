// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";
var a = 10
import './Grid.css'
function Grid() {
    var [grid, UpdateGrid] = useState([1, 2, 3,4,5,6,7,8,9]);
    const width = window.innerWidth;
    const height = window.innerHeight;

    
    
    var frameCss={
        
    };
    
    return (
        <>
            <div className="centered-div">
                <div className="frame">
                    <div className="graph">
                        {grid.map((item, index) => (
                            <div key={index} className="nodes">{item}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Grid