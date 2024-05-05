//Props: pasar datos a componentes
//Es posible pasar datos a componentes usando los llamados props.
//Ahora la función que define el componente tiene un parámetro props. Como argumento, el parámetro recibe un objeto, que tiene campos correspondientes a todos los "props" ("accesorios") que el usuario del componente define.

// const Hello = (props) => {
//     return (
//         <div>
//         <p>Hello {props.name}</p>
//         </div>
//     );
// };

//Los props se definen de la siguiente manera:
// const A_4 = () => {
//     return (
//         <div>
//             <h2>¡Bienvenido!</h2>
//             <Hello name='George' />
//             <Hello name='Daisy' />
//         </div>
//     )
// }

// Puede haber un número arbitrario de props y sus valores pueden ser strings "incrustados en el código" ("hard coded") o resultados de expresiones JavaScript. Si el valor del prop se logra usando JavaScript, debe estar envuelto con llaves.

const Hello = (props) => {
  //console.log(props)
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    )
}

const A_4 = () => {
    const name = 'Peter'
    const age = 10
    return (
        <div>
            <h2>¡Bienvenido!</h2>
            <Hello name='Maya' age={26 + 10} />
            <Hello name={name} age={age} />
        </div>
    )
}

//Los props enviados por el componente App son los valores de las variables, el resultado de la evaluación de la expresión de suma y un string regular.

//El componente Hello también imprime en consola el valor del objeto props.

export default A_4
