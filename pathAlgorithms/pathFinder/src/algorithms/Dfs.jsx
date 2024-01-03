import { useEffect } from "react";

function pause(ms) {
    return new Promise((resolve) =>
        setTimeout(() => { resolve }, ms)
    )
}

const Dfs = ({ graph, setGraph }) => {
    setTimeout(() => {
        // Update the graph in the parent component
        // newGraph.push(1)
        const newGraph = [1,2,3,4]; // Update with your actual new graph data
        setGraph(newGraph);
        console.log(graph)
    }, 3000);

    // useEffect(() => {
    //     const dfsIteration = () => {
    //         // Your DFS logic here...
    //         // Assuming you have a newGraph after the DFS iteration
    //         const newGraph = graph; // Update with your actual new graph data

    //         // Update the graph in the parent component
    //         setTimeout(() => {
    //             // Update the graph in the parent component
    //             newGraph.push(1)
    //             console.log(graph)
    //             setGraph(newGraph);
    //         }, 1000);
    //     };
    //     dfsIteration();
    // }, [graph, setGraph]);

    return null; // Dfs component doesn't render anything
};

export default Dfs;