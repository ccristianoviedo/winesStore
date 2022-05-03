import React from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'


const ItemListContainer=()=>{
    return (
        <>
            <h2>NUESTRO CATALOGO DE VINOS</h2>
            <div className='itemsLanding'>                
                <ItemList />
            </div>
        </>
    )
}
export default ItemListContainer;
  