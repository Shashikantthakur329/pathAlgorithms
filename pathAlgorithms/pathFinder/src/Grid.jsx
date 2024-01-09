// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from "react";
var a = 10
import './Grid.css'
import { Button } from "@mui/material";
import findPath from './algorithms/Dfs';
import Dfs from './algorithms/Dfs';
import Bfs from './algorithms/Bfs';
function Grid() {
    var [grid, UpdateGrid] = useState([2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3]);
    const [height, setViewportWidth] = useState(Math.min(0.8 * window.innerHeight, 0.8 * window.innerWidth));
    const [gridRows, setGridRows] = useState(Math.sqrt(grid.length)); // Initial grid-template-rows value
    // const [nodeHeight, setNodeHeight] = useState(height / NumElements)
    const [startNode, setStartNode] = useState(0);
    const [endNode, setEndNode] = useState(15);

    const updateWidth = () => {
        setViewportWidth(Math.min(0.8 * window.innerHeight, 0.8 * window.innerWidth));
    };
    // const graphContextProvider = ({})
    const updateGrid = () => {
        var num = Math.floor(Math.random() * 10) + 26;
        const tempArr = []
        for (var i = 1; i <= num * num; i++) {
            tempArr.push(0);
        }
        for (var i = Math.floor((num * 3) / 2); i < num * (num - 1); i += num) {
            tempArr[i] = 1;
        }

        var tt = Math.floor((num * (num / 2))) + 1;
        for (var i = 0; i < num - 3; i += 1) {
            tempArr[i + tt] = 1;
        }
        setEndNode(num * num);
        setGridRows(num);
        tempArr[startNode] = 2;
        tempArr[tempArr.length - 1] = 3;

        UpdateGrid(tempArr);
        console.log(num);
        // console.log(endNode);
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
    }

    var BnodeCss = {
        backgroundColor: "red",
    }

    var SnodeCss = {
        backgroundColor: "blue",
    }
    var EnodeCss = {
        backgroundColor: "magenta",
    }
    var VnodeCss = {
        backgroundColor: "orange",
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
 
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return (
        <>
            <div className="centered-div">
                <div className="frame" style={frameCss}>
                    {/* <>
                    </> */}
                    <div className="graph" style={graphCss}>
                        {grid.map((item, index) => {
                            if (item == '1') {
                                // console.log(index, key);
                                return (<div key={index} className="nodes" style={BnodeCss}></div>);
                            }
                            else if (item == '0') {
                                return (<div key={index} className="nodes" style={WnodeCss}></div>);
                            }
                            else if (item == '2') {
                                return (<div key={index} className="nodes" style={SnodeCss}></div>);
                            }
                            else if (item == '3') {
                                return (<div key={index} className="nodes" style={EnodeCss}></div>);
                            }
                            else if (item == '4') {
                                return (<div key={index} className="nodes" style={VnodeCss}></div>);
                            }
                        })}
                    </div>
                </div>
                <br />
                <Button variant="contained" onClick={updateGrid} className='btn'>New Graph</Button>
            </div>
            <div className="buttonClass">
                <Button variant="contained" onClick={Dfs.bind(null, grid, UpdateGrid)} className='btRun'>Dfs</Button>
                <Button variant="contained" onClick={Bfs.bind(null, grid, UpdateGrid)} className='btRun'>Bfs</Button>
            </div>
        </>
    )
}


export default Grid