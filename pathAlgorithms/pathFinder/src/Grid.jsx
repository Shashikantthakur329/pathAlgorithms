// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect, createContext, useContext } from "react";
var a = 10
import './Grid.css'
import { Button } from "@mui/material";
import findPath from './algorithms/Dfs';
import Dfs from './algorithms/Dfs';
import Bfs from './algorithms/Bfs';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Grid() {
    var [grid, UpdateGrid] = useState([2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3]);
    const [height, setViewportWidth] = useState(Math.min(0.8 * window.innerHeight, 0.8 * window.innerWidth));
    const [gridRows, setGridRows] = useState(Math.sqrt(grid.length)); // Initial grid-template-rows value
    const [startNode, setStartNode] = useState(0);
    const [endNode, setEndNode] = useState(15);
    const [mode, setMode] = useState(0);
    const [gridLength, updateGridLength] = useState(4 * 4);
    const updateWidth = () => {
        setViewportWidth(Math.min(0.8 * window.innerHeight, 0.8 * window.innerWidth));
    };
    var NumElements = Math.sqrt(grid.length);
    const width = height;
    var graphHeight = Math.min(height * 0.8, width * 0.8);

    var frameCss = {
        height: graphHeight,
        width: graphHeight,
    };
    var menuCss = {
        width: graphHeight,
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        display: "grid",
        justifyContent: "space-evenly",
        gridTemplateColumns: `repeat(4, 1fr)`,
        // repeat(auto-fit, minmax(250px, 1fr));
        columnGap: "20px",
    }

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
    var PnodeCss = {
        backgroundColor: "black",
    }

    const updateGrid = (gridLength) => {
        var num = Math.floor(Math.random() * 10) + 6;
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

    const editWalls = () => {
        if (mode == 0) {
            notify("Drag green and red elements over each other");
            setMode(1);
        }
        else {
            setMode(0);
        }

        console.log(mode);
    }

    const [draggedOverElements, setDraggedOverElements] = useState([]);


    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [currentlyDragging, setCurrentlyDragging] = useState(null);
    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDraggingOver(true);
        event.preventDefault();

        const draggedElement = event.target;
        const { clientX, clientY } = event;
        const elements = document.elementsFromPoint(clientX, clientY);

        var dragged_elements = elements.map((element) => element.id);
        setDraggedOverElements(dragged_elements);
        var temp = 1;
        // if(currentlyDragging == 1)
        // {

        // }
        if (currentlyDragging != null) {
            let tempVar = 0;
            // console.log("xxxx");
            if (currentlyDragging == -1) {
                tempVar = 0;
                console.log("000");
            }
            else if (currentlyDragging == -2) {
                tempVar = 1;
            }
            else{
                tempVar = grid[currentlyDragging];
            }
            for (var i = 0; i < dragged_elements.length; i++) {
                if (dragged_elements[i] > 0 && dragged_elements[i] < grid.length) {
                    var tempGrid = [...grid];
                    tempGrid[dragged_elements[i]] = tempVar;
                    console.log(tempGrid);
                    UpdateGrid([...tempGrid]);
                }
            }
        }
    };

    const handleDragLeave = () => {
        console.log("handleDragLeave!");
        setIsDraggingOver(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDraggedOverElements([]);
        setIsDraggingOver(false);
    };

    const handleDragStart = (event) => {
        setCurrentlyDragging(event.target.id);
        // console.log("started Dragging, ", event.target.id);
    }

    const handleDragEnd = (event) => {
        setCurrentlyDragging(null);
        console.log("Dragging ended of ", event.target.id);
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    const notify = (messg) => {
        toast.success(messg, {
            position: 'top-right',
            autoClose: 2000, // Set the duration for the notification to be visible
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <>
            <div className="menu" >
                <div className="buttonClass" style={menuCss}>
                    <Button variant="contained" onClick={updateGrid} className='menuBtn btRun'>New Graph</Button>
                    <Button variant="contained" onClick={editWalls} className='menuBtn btRun'>Edit Walls</Button>
                    <Button variant="contained" onClick={Dfs.bind(null, grid, UpdateGrid)} className='btRun'>Dfs</Button>
                    <Button variant="contained" onClick={Bfs.bind(null, grid, UpdateGrid)} className='btRun'>Shortest Path</Button>
                </div>
            </div>
            {/* <ToastContainer /> */}
            <div className="centered-div">
                {(mode == 1) ?
                    <div className="dragBtns" >
                        <div key={-2} id={-2} draggable onDragOver={handleDragOver} onDragStart={handleDragStart} onDragEnd={handleDragEnd} className="nodes" style={BnodeCss}>asd</div>
                        <div key={-1} id={-1} draggable onDragOver={handleDragOver} onDragStart={handleDragStart} onDragEnd={handleDragEnd} className="nodes" style={WnodeCss}>sd</div>
                    </div>
                    :
                    <div></div>
                }

                <div className="frame" style={frameCss}>
                    <div className="graph" style={graphCss}>
                        {grid.map((item, index) => {
                            if (item == '1') {
                                // console.log(index, key);
                                // return (<div key={index} id={index} draggable onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} className="nodes" style={BnodeCss}></div>);
                                return (<div key={index} id={index} draggable onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onDragStart={handleDragStart} onDragEnd={handleDragEnd} className="nodes" style={BnodeCss}></div>);
                            }
                            else if (item == '0') {
                                return (<div key={index} id={index} draggable onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} onDragStart={handleDragStart} onDragEnd={handleDragEnd} className="nodes" style={WnodeCss}></div>);
                            }
                            else if (item == '2') {
                                return (<div key={index} id={index} className="nodes" style={SnodeCss}></div>);
                            }
                            else if (item == '3') {
                                return (<div key={index} id={index} className="nodes" style={EnodeCss}></div>);
                            }
                            else if (item == '4') {
                                return (<div key={index} id={index} className="nodes" style={VnodeCss}></div>);
                            }
                            else if (item == '5') {
                                return (<div key={index} id={index} className="nodes" style={PnodeCss}></div>);
                            }
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}


export default Grid