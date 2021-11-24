import React, { useState } from 'react'

const ItemCount = ({ stock }) => {


    const [clicks, setClicks] = useState(0)

    const addClick = () => {

        if (clicks < stock) setClicks(clicks + 1)
    }

    const removeClick = () => {

        if (stock > 0) setClicks(clicks - 1)
    }
    return (
        <div>
            <h1>{clicks}</h1>
            <button onClick={() => addClick()}>Add</button>
            <button onClick={() => removeClick()}>Remove</button>
        </div>
    )
}

export default ItemCount

