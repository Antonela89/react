import { useState } from 'react';
//desestructuración de props
const Display = ({counter}) => {
    return (
        <div>{counter}</div>
    )
}

//desestructuración de props
const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const C_7 = () => {
    const [ counter, setCounter ] = useState(0);
    //console.log('renderizado con valor de contador', counter)
    
    const increaseByOne  = () => {
       // console.log('aumentando, valor antes', counter)
        setCounter(counter + 1)
    } 

    const setToZero = () => {
        //console.log('restablecer a cero, valor antes', counter)
        setCounter(0)}

    const decreaseByOne = () => {
        //console.log('decreciente, valor antes', counter)
        setCounter(counter - 1)
    }

    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={increaseByOne} text={'plus'}/>
            <Button onClick={setToZero} text={'zero'}/>
            <Button onClick={decreaseByOne} text={'minus'}/>
        </div>
    )
}

export default C_7
