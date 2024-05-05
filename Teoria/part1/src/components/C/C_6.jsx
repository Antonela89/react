//Se recomienda escribir componentes de React que sean pequeños y reutilizables en toda la aplicación e incluso en proyectos.

//Una de las mejores prácticas en React es levantar el estado en la jerarquía de componentes. La documentación dice:

// A menudo, varios componentes deben reflejar los mismos datos cambiantes. Recomendamos elevar el estado compartido a su ancestro común más cercano.


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

const C_6 = () => {
    const [ counter, setCounter ] = useState(0);
    
    const increaseByOne  = () => setCounter(counter + 1); 
    const setToZero = () => setCounter(0);
    const decreaseByOne = () => setCounter(counter-1);

    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={increaseByOne} text={'plus'}/>
            <Button onClick={setToZero} text={'zero'}/>
            <Button onClick={decreaseByOne} text={'minus'}/>
        </div>
    )
}

export default C_6
