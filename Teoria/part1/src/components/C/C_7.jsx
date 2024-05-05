import { useState } from 'react';

const Display = (props) => {
    return (
        <div>{props.counter}</div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}


//Llamar a una función que cambia el estado hace que el componente se vuelva a procesar.

//Entonces, si un usuario hace clic en el botón plus, el controlador de eventos del botón cambia el valor de counter a 1, y el componente App se vuelve a generar. Esto hace que sus subcomponentes Display y Button también se vuelvan a renderizar. Display recibe el nuevo valor del contador, 1, como prop. Los componentes Button reciben controladores de eventos que pueden usarse para cambiar el estado del contador.

const C_7 = () => {
    const [ counter, setCounter ] = useState(0);
    console.log('renderizado con valor de contador', counter)
    
    const increaseByOne  = () => {
        console.log('aumentando, valor antes', counter)
        setCounter(counter + 1)
    } 

    const setToZero = () => {
        console.log('restablecer a cero, valor antes', counter)
        setCounter(0)}

    const decreaseByOne = () => {
        console.log('decreciente, valor antes', counter)
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
