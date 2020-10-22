/*
 *[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
 */
let triangle = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
];

// // 递归
// function minnumTotal(triangle) {
//   if(triangle.length == 0) return 0;
//   return helper1(triangle, 0, 0);
// }

// function helper1(triangle, i, j) {
//   if(triangle.length == i) return 0;
//   return Math.min(helper1(triangle, i + 1, j + 1), helper1(triangle, i + 1, j)) + triangle[i][j];
// }
// console.log(minnumTotal(triangle));

// //mery
// function minnumTotal2(triangle) {
//   if(triangle.length == 0) return 0;
//   let n = triangle.length;
//   let m = triangle[n-1].length;
//   let memo = Array.from(new Array(n), ()=>new Array(m).fill(0));
//   return help2(triangle, 0, 0, memo);
// }
// function help2(triangle, i, j, memo) {
//   if(triangle.length == i) return 0;
//   if(memo[i][j]) {
//     return memo[i][j];
//   }
//   memo[i][j] = Math.min(help2(triangle, i+1, j, memo), help2(triangle, i+1, j+1, memo)) + triangle[i][j];
//   return memo[i][j];
// }

// console.log(minnumTotal2(triangle));


// //dp
// function minnumTotal3(triangle) {
//   if(triangle.length == 0) return 0;
//   let dp = triangle;
//   for(let i = triangle.length - 2; i >= 0; i--) {
//     for(let j = 0; j < triangle[i].length; j++) {
//       dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j];
//     }
//   }

//   return dp[0][0];
// }

// console.log(minnumTotal3(triangle));

function minnumTotal4(triangle) {
  if(triangle.length == 0) return 0;
  let n = triangle.length;
  let dp = new Array(n+1).fill(0);

  for(let i = n - 1 ; i >= 0; i--) {
    for(let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j+1], dp[j]) + triangle[i][j];
    }
  }
  console.log(dp)
  return dp[0];
}

console.log(minnumTotal4(triangle));
