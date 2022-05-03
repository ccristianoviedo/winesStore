import React from 'react';
import ItemCount from './ItemCount';


const Item=({products})=>{
    return (
        <div className='item'>
            <img src={products.img} alt={products.name} className='imgUrl'/>        
            <p>BODEGA:{products.name}</p>
            <p>PRECIO: $ {products.price}</p>
            <p>{products.descripcion}</p>
            <p>STOCK: {products.stock}</p>
            <p>CODIGO:{products.id}</p>
            <ItemCount initial={1} stock={products.stock}/>
        </div>
    ) 
}
export default Item;
