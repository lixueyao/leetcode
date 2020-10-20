function uniquePathsWithObstacles(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let path = Array.from(new Array(m), () => new Array(n).fill(0));

    for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
        path[i][0] = 1;
    }
    for (let j = 0; j < n && obstacleGrid[0][j] == 0; j++) {
        path[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                path[i][j] = 0;
            } else {
                path[i][j] = path[i - 1][j] + path[i][j - 1];
            }
        }
    }

    return path[m - 1][n - 1];
};

let  obstacleGrid = [[0,0,0], [0,1,0], [0,0,0]];
console.log(uniquePathsWithObstacles(obstacleGrid));