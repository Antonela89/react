//LLamando a un componentes muchas veces:
//Hello como componente auxiliar
const Hello = () => {
    return (
        <div>
            <p>Hello Word!</p>
        </div>
    )
}

const A_3 = () => {
    return (
        <div>
            <h2>¡Bienvenido!</h2>
            <Hello/>
            <Hello/>
            <Hello/>
        </div>
    )
}

export default A_3