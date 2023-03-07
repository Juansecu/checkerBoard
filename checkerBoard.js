var n = 5;

let checkerBoard = 'X';
let currentLength = checkerBoard.length;

const checkerBoardDimensions = n * n;
const checkerBoardRows = [];
const nMultiples = multiples(checkerBoardDimensions -1, n);

for (let i = currentLength; i < checkerBoardDimensions; i++) {
  checkerBoard.charAt(checkerBoard.length - 1) == 'X'
  	? checkerBoard = checkerBoard.concat('_')
  	: checkerBoard = checkerBoard.concat('X');
  
  if (nMultiples.indexOf(checkerBoard.length) > -1) {
	checkerBoardRows.push(checkerBoard);
	checkerBoard = '';
  }
  
  if (checkerBoardRows.length === n) break;
}

checkerBoardRows.forEach(row => console.log(row));

function multiples(limit, n) {
    return Array(limit).fill(0).map((v,i)=>{return (i+1)%n===0 ? i+1 : 0}).filter(v=>v!=0)
}