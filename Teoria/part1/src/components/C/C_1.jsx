const Hello = (props) => {
    const bornYear = () => {
    const yearNow = new Date().getFullYear()
        return yearNow - props.age
    }

    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const C_1 = () => {
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

export default C_1

