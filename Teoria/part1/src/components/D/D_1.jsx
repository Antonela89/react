//En nuestro ejemplo anterior el estado de la aplicación era simple ya que estaba compuesto por un solo entero. ¿Y si nuestra aplicación requiere un estado más complejo?

//En la mayoría de los casos, la manera más fácil y mejor de lograr esto es usando la función useState varias veces para crear "partes" de estado separadas.

//En el siguiente código creamos dos partes de estado para la aplicación llamada left y right que obtienen el valor inicial de 0:

// import { useState }  from 'React';

// const D_1 = () => {
//     const [left, setLeft] = useState(0);
//     const [right, setRight] = useState(0);

//     return (
//         <div>
//             {left}
//             <button onClick={() => setLeft(left + 1)}>
//                 left
//             </button>
//             <button onClick={() => setRight(right + 1)}>
//                 right
//             </button>
//             {right}
//         </div>
//     )
// }

// export default D_1

//El estado del componente o una parte de su estado puede ser de cualquier tipo. Podríamos implementar la misma funcionalidad guardando el recuento de clics de los botones left y right en un solo objeto:

// {
//     left: 0,
//     right: 0
//   }

//En este caso, la aplicación se vería así:

// import { useState }  from 'React';

// const D_1 = () => {
//     const [clicks, setClicks] = useState({
//         left: 0, right: 0
//     })

//     const handleLeftClick = () => {
//         const newClicks = {
//             left: clicks.left + 1,
//             right: clicks.right
//         }
//         setClicks(newClicks)
//     }
    
//     const handleRightClick = () => {
//         const newClicks = {
//             left: clicks.left,
//             right: clicks.right + 1
//         }
//         setClicks(newClicks)
//     }
    

//     return (
//         <div>
//             {clicks.left}
//             <button onClick={handleLeftClick}>left</button>
//             <button onClick={handleRightClick}>right</button>
//             {clicks.right}
//         </div>
//     )
// }

// export default D_1

//Ahora el componente solo tiene una parte de estado y los controladores de eventos deben encargarse de cambiar el estado completo de la aplicación.

// El controlador de eventos se ve un poco desordenado. Cuando se hace clic en el botón izquierdo, se llama a la siguiente función:

// const handleLeftClick = () => {
//     const newClicks = {
//         left: clicks.left + 1,
//         right: clicks.right
//     }
//     setClicks(newClicks)
// }

// El siguiente objeto se establece como el nuevo estado de la aplicación:

// {
//     left: clicks.left + 1,
//     right: clicks.right
// }

//El nuevo valor de la propiedad left ahora es el mismo que el valor de left + 1 del estado anterior, y el valor de la propiedad right es el mismo que el valor de la propiedad right del estado anterior.

//Podemos definir el nuevo objeto de estado de una manera más clara utilizando la sintaxis de object spread que se agregó a la especificación del lenguaje en el verano de 2018:

// const handleLeftClick = () => {
//     const newClicks = {
//     ...clicks,
//     left: clicks.left + 1
//     }
//     setClicks(newClicks)
// }

// const handleRightClick = () => {
//     const newClicks = {
//     ...clicks,
//     right: clicks.right + 1
//     }
//     setClicks(newClicks)
// }

//{...clicks} crea un nuevo objeto que tiene copias de todas las propiedades del objeto clicks. Cuando especificamos una propiedad en particular, por ejemplo, right en {...clicks, right: 1}, el valor de la propiedad right en el nuevo objeto será 1.

// No es necesario asignar el objeto a una variable en los controladores de eventos y podemos simplificar las funciones a la siguiente forma:

// const handleLeftClick = () =>
//     setClicks({ ...clicks, left: clicks.left + 1 })

// const handleRightClick = () =>
//     setClicks({ ...clicks, right: clicks.right + 1 })

//COMPONENTE ACTUALIAZADO:

import { useState }  from 'React';

const D_1 = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
    
    const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })
    

    return (
        <div>
            {clicks.left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {clicks.right}
        </div>
    )
}

export default D_1