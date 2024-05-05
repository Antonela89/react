import { useState } from 'react';

const C_4 = () => {
    const [ counter, setCounter ] = useState(0);

    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>
                +
            </button>
            <button onClick={() => setCounter(0)}>
                0
            </button>
            <button onClick={() => setCounter(counter - 1)}>
                -
            </button>
        </div>
    )
}

export default C_4
