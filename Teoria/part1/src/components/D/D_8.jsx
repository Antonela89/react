// import { useState }  from 'react';

// const D_8 = () => {
//     const [value, setValue] = useState(10)

//     const hello = () => {
//         const handler = () => console.log('hello world')
//         return handler
//     }

//     return (
//         <div>
//             {value}
//             <button onClick={hello()}>button</button>
//         </div>
//     )
// }

// export default D_8;

// El controlador de eventos ahora está configurado para una llamada de función:

// <button onClick={hello()}>button</button>

// Cuando se procesa el componente, se ejecuta la siguiente función:

// const hello = () => {
//     const handler = () => console.log('hello world')

//     return handler
// }

// El valor de retorno de la función es otra función que se asigna a la variable handler.

// Cuando React renderiza la línea:

// <button onClick={hello()}>button</button>copy
// Asigna el valor de retorno de hello() al atributo onClick. Básicamente, la línea se transforma en:

// <button onClick={() => console.log('hello world')}>
//     button
// </button>

// Dado que la función hello devuelve una función, el controlador de eventos ahora es una función.

//cambiando el componente: 

// import { useState }  from 'react';

// const D_8 = () => {
//     const [value, setValue] = useState(10)

//     // const hello = (who) => {
//     //     const handler = () => {
//     //         console.log('hello', who)
//     //     }
//     //     return handler
//     // }

//     const hello = (who) => () => {
//         console.log('hello', who)
//     }

//     return (
//         <div>
//             {value}
//             <button onClick={hello('world')}>button world</button>
//             <button onClick={hello('react')}>button react</button>
//             <button onClick={hello('function')}>button function</button>
//         </div>
//     )
// }

// export default D_8;

// Ahora la aplicación tiene tres botones con controladores de eventos definidos por la función hello que acepta un parámetro.

// Las funciones que devuelven funciones se pueden utilizar para definir funciones genéricas que se pueden personalizar con parámetros. La función hello que crea los controladores de eventos se puede considerar como una fábrica que produce controladores de eventos personalizados destinados a saludar a los usuarios.

import { useState }  from 'react';

const D_8 = () => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        console.log('value now', newValue)
        setValue(newValue)
    }

    return (
        <div>
            {value}
            <button onClick={() => setToValue(1000)}>
                thousand
            </button>
            <button onClick={() => setToValue(0)}>
                reset
            </button>
            <button onClick={() => setToValue(value + 1)}>
                increment
            </button>
        </div>
    )
}

export default D_8;