function latticePaths(gridSize) {
    let routes = 0;
    function move(x, y) {
        if (x !== gridSize) {
            move(x + 1, y);
        }
        if (y !== gridSize) {
            move(x, y+1)
        }
        if (x === gridSize && y === gridSize) {
            routes++;
        }
    }
    move(0, 0);
    return routes;
}
  
console.log(latticePaths(20));