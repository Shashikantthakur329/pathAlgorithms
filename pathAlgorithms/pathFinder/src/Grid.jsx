// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
var a = 10
import './Grid.css'
import { Button } from "@mui/material";
function Grid() {
    var [grid, UpdateGrid] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    const [height, setViewportWidth] = useState(Math.min(0.8 * window.innerHeight, 0.8 * window.innerWidth));
    const [gridRows, setGridRows] = useState(Math.sqrt(grid.length)); // Initial grid-template-rows value
    // const [nodeHeight, setNodeHeight] = useState(height / NumElements)

    const updateWidth = () => {
        setViewportWidth(Math.min(0.8 * window.innerHeight, 0.8 * window.innerWidth));
    };

    const updateGrid = () => {
        var num = Math.floor(Math.random() * 10) + 6;
        const tempArr = []
        for (var i = 1; i <= num * num; i++) {
            tempArr.push(0);
        }
        for(var i = Math.floor((num * 3) / 2); i < num * (num - 1); i+=num)
        {
            // console.log(i)
            tempArr[i] = 1;
        }
        
        var tt = Math.floor((num * (num / 2))) + 1;
        for(var i = 0; i < num - 3 ; i+=1)
        {
            // console.log(i)
            tempArr[i + tt] = 1;
        }
        
        setGridRows(num);
        UpdateGrid(tempArr);
        console.log(num);
    }

    const updateGridRows = () => {
        setGridRows(Math.sqrt(grid.length) - 1); // You can change this to any desired value
        console.log(gridRows);
    };


    var NumElements = Math.sqrt(grid.length);
    const width = height;
    var graphHeight = Math.min(height * 0.8, width * 0.8);

    var frameCss = {
        height: graphHeight,
        width: graphHeight,
        // backgroundColor: "black",
    };

    var graphCss = {
        display: "grid",
        gridTemplateRows: `repeat(${gridRows}, 1fr)`,
        gridTemplateColumns: `repeat(${gridRows}, 1fr)`,
        rowGap: "4px",
        columnGap: "4px",
        height: "100%",
        justifyContent: "space-between",
    };

    var WnodeCss = {
        backgroundColor: "#53d133"
        // height:nodeHeight,
        // width:nodeHeight,
        // backgroundColor:"yellow",
    }

    var BnodeCss = {
        backgroundColor: "red",
        // height:nodeHeight,
        // width:nodeHeight,
        // backgroundColor:"yellow",
    }
    useEffect(() => {
        // Attach the event listener on component mount
        window.addEventListener('resize', updateWidth);
        // updateGridRows
        // window.addEventListener('resize', updateGridRows);

        // Detach the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return (
        <>
            <div className="centered-div">
                <div className="frame" style={frameCss}>
                    <div className="graph" style={graphCss}>
                        {grid.map((item, index) => {
                            if (item == '1') {
                                // console.log(index, key);
                                return (<div key={index} className="nodes" style={BnodeCss}>{item}</div>);
                            }
                            else
                            {
                                return (<div key={index} className="nodes" style={WnodeCss}>{item}</div>);
                            }
                        })}
                    </div>
                </div>
                <br />
                <Button variant="contained" onClick={updateGrid} className='btn'>New Graph</Button>
            </div>
        </>
    )
}


export default Grid