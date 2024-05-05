import { useState } from 'react';

const D_2 = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    //Agreguemos un fragmento de estado a nuestra aplicación que contenga un array allClicks que recuerda cada clic que ha ocurrido en la aplicación, se inicializa como una matriz vacia:
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <p>{allClicks.join(' ')}</p>
        </div>
    )
}

export default D_2

// La parte del estado almacenada en allClicks ahora está configurada para ser un array que contiene todos los elementos del array de estado anterior más la letra L. La adición del nuevo elemento al array se logra con el método concat, que no muta el array existente, sino que devuelve una nueva copia del array con el elemento agregado.

// Como se mencionó anteriormente, también es posible en JavaScript agregar elementos a un array con el método push. Si agregamos el elemento empujándolo al array allClicks y luego actualizando el estado, la aplicación aún parecería funcionar

// Sin embargo, no haga esto. Como se mencionó anteriormente, el estado de los componentes de React como allClicks no debe modificarse directamente. Incluso si el estado mutante parece funcionar en algunos casos, puede provocar problemas que son muy difíciles de depurar.

// Echemos un vistazo más de cerca a cómo se muestra el historial de clics en la página

// Llamamos al método join en el array allClicks que une todos los elementos en una sola cadena, separados por la cadena pasada como parámetro de la función, que en nuestro caso es un espacio vacío.