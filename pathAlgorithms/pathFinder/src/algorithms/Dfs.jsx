import React, {useState, useEffect } from "react";

// function Sleep(ms) {
//     return new Promise((resolve) =>
//         setTimeout(() => { resolve }, ms)
//     )
// }
function Sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
function getElem(grid, x, y){
    let n = Math.sqrt(grid.length);
    if (x >= n || y >= n) return 1;
    return grid[x * n + y]
}
let stop = 0;
var dirn = [[1,0],[0,1]]
let vis = []
async function dfs(grid, UpdateGrid,n, x, y)
{
    if(x >= n || y >= n)
    {
        return false;
    }
    if (getElem(grid,nx,ny) == 3) return true;
    // vis[x][y] = 1;
    grid[x * n + y] = 4;
    UpdateGrid([...grid])
    await Sleep(200);
    for(let i = 0; i < 2; i++)
    {
        var dx = dirn[i][0];
        var dy = dirn[i][1];
        var nx = x + dx;
        var ny = y + dy;
        if(stop == 1) return true;
        if(nx < n && ny < n && getElem(grid,nx,ny) == 3)
        {
            grid[x * n + y] = 4;
            UpdateGrid([...grid])
            stop = 1;
            return true;
        }
        if(nx < n && ny < n && getElem(grid,nx,ny) != 1 && getElem(grid,nx,ny) != 4)
        {
            await dfs(grid, UpdateGrid, n, nx, ny);
        }
    }
    return false;
}

const Dfs = async (grid, UpdateGrid) => {
    stop = 0;
    const newGraph = [...grid];
    let n = newGraph.length;
    let rows = Math.sqrt(n)
    for(let i = 0; i < rows; i++)
    {
        vis[i] = []
        for(let j = 0; j < rows; j++)
        {
            vis[i][j] = 0;
        }
    }
    dfs(newGraph, UpdateGrid, rows, 0, 0);
    UpdateGrid([...newGraph]);
    return null;
};

export default Dfs;