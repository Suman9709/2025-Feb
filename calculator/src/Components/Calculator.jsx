import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'

const Calculator = () => {

    const [text, setText] = useState("")
    const [result, setResult] = useState("")

    const addToText = (val) => {
        setText((prevtext) => prevtext + val)
    };

    const resetInput = () => {
        setText("");
        setResult("")
    };



    const calculateResult = () => {
        try {
            const computedResult = eval(text);
            setResult(computedResult);
        } catch (error) {
            setResult("Error");
        }
    };

    return (
        <div className='flex flex-col justify-center items-center bg-amber-800 h-screen gap-2'>
            <div className='text-white text-3xl m-4 font-sans'>
            <h1>Calculate the World</h1>

            </div>
            <Input text={text} result={result} />

            <div className='flex flex-row justify-center items-center gap-3 bg-white'>

                <div>
                    <Button value={'7'} color="gray" handleClick={addToText} />
                    <Button value={'4'} color="gray" handleClick={addToText} />
                    <Button value={'1'} color="gray" handleClick={addToText} />
                    <Button value={'0'} color="gray" handleClick={addToText} />
                </div>

                <div >
                    <Button value={'8'} color="gray" handleClick={addToText} />
                    <Button value={'5'} color="gray" handleClick={addToText} />
                    <Button value={'2'} color="gray" handleClick={addToText} />
                    <Button value={'.'} color="orange" handleClick={addToText} />
                </div>


                <div >
                    <Button value={'9'} color="gray" handleClick={addToText} />
                    <Button value={'6'} color="gray" handleClick={addToText} />
                    <Button value={'3'} color="gray" handleClick={addToText} />
                    <Button value={'='} color="orange" handleClick={calculateResult} />
                </div>

                <div>
                    <Button value={'/'} color="orange" handleClick={addToText} />
                    <Button value={'*'} color="orange" handleClick={addToText} />
                    <Button value={'+'} color="orange" handleClick={addToText} />
                    <Button value={'-'} color="orange" handleClick={addToText} />
                </div>

            </div>
            <Button value={"Clear"} color="red" handleClick={resetInput} />
        </div>
    )
}

export default Calculator