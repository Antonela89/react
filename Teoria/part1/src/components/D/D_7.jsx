import { useState } from 'react'

const D_7 = () => {
    const [value, setValue] = useState(10)

    const handleClick = () => {
        console.log('clicked the button')
        setValue(0)
    }

    return (
        <div>
            {value}
            <button onClick={handleClick}>button</button>
        </div>
    )
}

export default D_7
