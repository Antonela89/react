//Desestructuración: se agregó en especificación ES6.
//Nos permite desestructurar valores de objetos y matrices en la asignación.

//Props es un objeto: 
// props = {
//     name: 'Arto Hellas',
//     age: 35,
//   }
// podemos optimizar nuestro componente asignando los valores de las propiedades directamente en dos variables name y age que luego podemos usar en nuestro código:

// const Hello = (props) => {
//     const name = props.name
//     const age = props.age

//     const bornYear = () => new Date().getFullYear() - age

//     return (
//         <div>
//             <p>Hello {name}, you are {age} years old</p>
//             <p>So you were probably born in {bornYear()}</p>
//         </div>
//     )
// }

// La desestructuración facilita aún más la asignación de variables, ya que podemos usarla para extraer y reunir los valores de las propiedades de un objeto en variables separadas:

// const Hello = (props) => {
//     const { name, age } = props
//     const bornYear = () => new Date().getFullYear() - age

//     return (
//         <div>
//             <p>Hello {name}, you are {age} years old</p>
//             <p>So you were probably born in {bornYear()}</p>
//         </div>
//     )
// }

// Podemos llevar la desestructuración un paso más allá:
// Los props que se pasan al componente ahora se desestructuran directamente en las variables name y age.
// Esto significa que en lugar de asignar todo el objeto props a una variable llamada props y luego asignar sus propiedades a las variables name y age

// const Hello = (props) => {
//     const { name, age } = props

// asignamos los valores de las propiedades directamente a las variables al desestructurar el objeto props que se pasa a la función del componente como parámetro:

const Hello = ({name , age}) => {
    const bornYear = () => new Date().getFullYear() - age  

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const C_2 = () => {
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h3>Bienvenido</h3>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
        </div>
    )
}

export default C_2
