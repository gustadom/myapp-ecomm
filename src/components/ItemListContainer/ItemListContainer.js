import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount stock={5} />
        </div>
    )
}

export default ItemListContainer
