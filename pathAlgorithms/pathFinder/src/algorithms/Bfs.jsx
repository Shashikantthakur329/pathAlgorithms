class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    queue() {
        var t = this.head;
        let arr = []
        console.log("t is ", t);
        while (t < this.length) {
            // console.log(this.elements[t]);
            t++;
            arr.push(this.elements[t]);
            // console.log(t);
        }
        // return {this.elements, this.head};
        return arr;
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}


function Sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getElem(grid, x, y) {
    let n = Math.sqrt(grid.length);
    if (x >= n || y >= n) return 1;
    return grid[x * n + y]
}
let stop = 0;
var dirn = [[1, 0], [0, 1], [-1, 0], [0, -1]]
let vis = []

async function bfs(grid, UpdateGrid, n, x, y) {
    const q = []
    q.push({x,y});

    while (q.length > 0) {
        let len = q.length;
        while (len-- > 0) {
            var cord = q.shift();
            var x = cord.x, y = cord.y;
            if (x >= 0 && y >= 0 && x < n && y < n && getElem(grid, x, y) == 3) {
                grid[x * n + y] = 4;
                UpdateGrid([...grid]);
                return true;
            }
            grid[x * n + y] = 4;
            for (var i = 0; i < dirn.length; i++) {
                var nx = cord.x + dirn[i][0];
                var ny = cord.y + dirn[i][1];
                if (nx >= 0 && ny >= 0 && nx < n && ny < n && getElem(grid, nx, ny) != 1 && getElem(grid, nx, ny) != 4) {
                    grid[nx * n + y] = 4;
                    q.push(...[{ x: nx, y: ny }]);
                }
            }
        }
        UpdateGrid([...grid]);
        await Sleep(100);
    }
}

const Bfs = async (grid, UpdateGrid) => {
    stop = 0;
    const newGraph = [...grid];
    let n = newGraph.length;
    let rows = Math.sqrt(n)
    for (let i = 0; i < rows; i++) {
        vis[i] = []
        for (let j = 0; j < rows; j++) {
            vis[i][j] = 0;
        }
    }
    bfs(newGraph, UpdateGrid, rows, 0, 0);
    UpdateGrid([...newGraph]);
    return null;
};

export default Bfs;