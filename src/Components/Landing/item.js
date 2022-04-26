import React from 'react';
import ItemCount from './ItemCount';
import { useState } from 'react';

const Item=({products})=>{
    const [counter, setCounter]= useState(1);   
    const sumar=()=>setCounter(counter+1)
    const subtract=()=>setCounter(counter-1)
    const reset=()=>setCounter(0)  
    return (
        <div className='itemContainer'>
            <img src={products.img} alt={products.name} className='imgLanding'/>        
            <p>BODEGA:{products.name}</p>
            <p>PRECIO: $ {products.price}</p>
            <p>{products.descripcion}</p>
            <p>STOCK: {products.stock}</p>
            <p>CODIGO:{products.id}</p>
            <ItemCount reset={reset} sumar={sumar} subtract={subtract} counter={counter} stock={products.stock}/>
        </div>
    ) 
}
export default Item;
