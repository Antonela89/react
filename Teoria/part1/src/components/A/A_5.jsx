//No renderizar objetos:

// const App = () => {
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]

//   return (
//     <div>
//       <p>{friends[0]}</p>
//       <p>{friends[1]}</p>
//     </div>
//   )
// }

// export default App

// La raíz del problema es Objects are not valid as a React child (Los objetos no son válidos como elementos hijos de React), es decir, la aplicación intentó renderizar objetos y falló nuevamente.

// El código trató de renderizar la información de un amigo de la siguiente manera:

// <p>{friends[0]}</p>

// y esto causó un problema porque el item a ser renderizado en las llaves es un objeto.

// { name: 'Peter', age: 4 }

// En React, las cosas individuales a ser renderizadas dentro de llaves deben ser valores primitivos, como números o cadenas.

// La solución es la siguiente:

const A_5 = () => {
    const friends = [
        { name: 'Peter', age: 4 },
        { name: 'Maya', age: 10 },
    ]

    const friends2 = [ 'Peter', 'Maya']

    return (
        <>
            <div>
                <p>{friends[0].name} {friends[0].age}</p>
                <p>{friends[1].name} {friends[1].age}</p>
            </div>
            <div>
                <p>{friends2}</p> {/*no da el resultado deseado, pero se ve en el Dom*/}
            </div>
        </>
    )
}

export default A_5