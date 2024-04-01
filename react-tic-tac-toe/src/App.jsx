import { useEffect, useState } from 'react'
import { Cell } from './components/Cell';
import './App.css'
import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const GameWonBanner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: green;
  color: white;
`;

function App() {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const [turn, setTurn] = useState('O');

  const [gameWon, setGameWon] = useState(false);

  const handleClick = (rowIndex, cellIndex) => {

    const newBoardState = [...board];
    newBoardState[rowIndex][cellIndex] = turn;

    if (turn === 'O') {
      setTurn('X');
    } else {
      setTurn('O');
    }

    setBoard(newBoardState);
  }

  useEffect(() => {
    // check verticals
    const checkVerticalNoughts = board.some((row) => row.every((cell) => cell === 'O'));
    const checkVerticalCrosses = board.some((row) => row.every((cell) => cell === 'X'));

    if (checkVerticalCrosses || checkVerticalNoughts) {
      setGameWon(true);
    }
    
    // check horizontals
    const transposedBoard = [
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]]
    ];
    const checkHorizontalNoughts = transposedBoard.some((row) => row.every((cell) => cell === 'O'));
    const checkHorizontalCrosses = transposedBoard.some((row) => row.every((cell) => cell === 'X'));

    if (checkHorizontalNoughts || checkHorizontalCrosses) {
      setGameWon(true);
    }

    // check diagonals
    const diagonals = [
      [board[0][0], board[1][1], board[2][2]],
      [board[0][2], board[1][1], board[2][0]]
    ];

    const checkDiagonalNoughts = diagonals.some((diagonal) => diagonal.every((cell) => cell === 'O'));
    const checkDiagonalCrosses = diagonals.some((diagonal) => diagonal.every((cell) => cell === 'X'));

    if (checkDiagonalNoughts || checkDiagonalCrosses) {
      setGameWon(true);
    }
  }, [board]);

  const resetBoard = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setGameWon(false);
    setTurn('O');
  }

  return (
    <>
      {gameWon && (
        <GameWonBanner>
          <h1>Congratulations!</h1>
          <p>{turn === 'O' ? 'X' : 'O' } is the winner!</p>
        </GameWonBanner>
      )}
      <StyledPage>
        {board.map((row, index) => {
          return (
            <div key={`row-${index}`}>
              {row.map((cell, cellIndex) => {
                return <Cell value={cell} key={cellIndex} onClick={() => handleClick(index, cellIndex)}/>
              })}
            </div>
          )
        })}
      </StyledPage>
      <button onClick={resetBoard}>Reset Game</button>
    </>

  )
}

export default App
