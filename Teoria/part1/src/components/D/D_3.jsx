// import { useState } from 'react';

// const D_3 = () => {
//     const [left, setLeft] = useState(0);
//     const [right, setRight] = useState(0);
//     const [allClicks, setAll] = useState([]);
//     const [total, setTotal] = useState(0);

//     const handleLeftClick = () => {
//         setAll(allClicks.concat('L'))
//         console.log('left before', left)
//         setLeft(left + 1)
//         console.log('left after', left)
//         setTotal(left + right)
//     }

//     const handleRightClick = () => {
//         setAll(allClicks.concat('R'))
//         console.log('right before', left)
//         setRight(right + 1)
//         console.log('right after', left)
//         setTotal(left + right)
//     }

//     return (
//         <div>
//             {left}
//             <button onClick={handleLeftClick}>left</button>
//             <button onClick={handleRightClick}>right</button>
//             {right}
//             <p>{allClicks.join(' ')}</p>
//             <p>total {total}</p>
//         </div>
//     )
// }

// export default D_3;

//El número total de pulsaciones de botones es constantemente uno menos que la cantidad real de pulsaciones

//La razón de esto es que una actualización de estado en React ocurre asincrónicamente, es decir, no inmediatamente sino "en algún momento" antes de que el componente se renderice nuevamente.

// Podemos arreglar la aplicación de la siguiente manera:

import { useState } from 'react';

const D_3 = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);
    const [total, setTotal] = useState(0);

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        setTotal(updatedLeft + right)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedRigth = right + 1
        setRight(updatedRigth)
        setTotal(left + updatedRigth)
    }

    return (
        <div>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <p>{allClicks.join(' ')}</p>
            <p>total {total}</p>
        </div>
    )
}

export default D_3;


