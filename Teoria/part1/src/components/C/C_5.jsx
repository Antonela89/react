import { useState } from 'react';

const C_5 = () => {
    const [ counter, setCounter ] = useState(0);
    
    //Aquí los controladores de eventos se han definido correctamente. El valor del atributo onClick es una variable que contiene una referencia a una función
    
    const increaseByOne  = () => setCounter(counter + 1); 
    const setToZero = () => setCounter(0);
    const decreaseByOne = () => setCounter(counter-1);

    return (
        <div>
            <div>{counter}</div>
            <button onClick={increaseByOne}>
                +
            </button>
            <button onClick={setToZero}>
                0
            </button>
            <button onClick={decreaseByOne}>
                -
            </button>
        </div>
    )
}

export default C_5
