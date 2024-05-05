import { useState } from 'react'

const D_6 = () => {
    // estos están bien
    const [age, setAge] = useState(0)
    const [name, setName] = useState('Juha Tauriainen')

    // if ( age > 10 ) {
    //     // esto no funciona!
    //     const [foobar, setFoobar] = useState(null)
    // }
    
    // for ( let i = 0; i < age; i++ ) {
    //     // esto tampoco está bien
    //     const [rightWay, setRightWay] = useState(false)
    // }
    
    // const notGood = () => {
    //     // y esto también es ilegal
    //     const [x, setX] = useState(-1000)
    // }

    return (
        <div>
            {name} {age}
        </div>
    )
}

export default D_6
