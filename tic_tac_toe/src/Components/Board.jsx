import React, { useState } from 'react'
import Square from './Square'
const Board = () => {
    const [value, setValue] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState(true);


    const handleSquare = (i) => {
        if (calculateWinner(value) || value[i]) {
            return;
        }
        const nextSquare = value.slice();
        nextSquare[i] = isNext ? "X" : "O";
        setValue(nextSquare);
        setIsNext(!isNext);
    }

    const resetgame = () => {
        setValue(Array(9).fill(null));
        setIsNext(true);
    }

    const winner = calculateWinner(value);
    let status;
    if (winner) {
        status = "Winner" + winner;
    }
    else {
        status = "NextPlayer" + (isNext ? "X" : "O");
    }

    function calculateWinner(value) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [2, 5, 8],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (value[a] && value[a] === value[b] && value[a] === value[c]) {
                return value[a];
            }
        }
        return null;

    }
    return (
        <div className='flex flex-col justify-center min-h-screenbg-gray-100'>
            <div className='mb-4 text-2xl font-bold'>{status}</div>

            <div className='grid grid-cols-3 gap-2'>
                {
                    value.map((val, i) => (
                        <Square key={i} value={val} onSquareClick={() => handleSquare(i)} />
                    ))
                }

            </div>

            <button onClick={resetgame}>Reset</button>

        </div>
    )
}

export default Board