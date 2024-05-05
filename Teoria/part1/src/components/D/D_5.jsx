import { useState } from 'react';

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
            La aplicación se utiliza presionando los botones
            </div>
        ) 
    }

        return (
        <div>
            Historial de pulsaciones de botones: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = (props) => {
    console.log('props value is', props)
    const { handleClick, text } = props

    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const D_4 = () => {
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
            <Button handleClick={handleLeftClick} text='left' />
            <Button handleClick={handleRightClick} text='right' />
            {right}
            <History allClicks={allClicks} />
        </div>
    )
}

export default D_4;