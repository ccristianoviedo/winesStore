import React, {useState, useEffect} from 'react';
import './ItemListContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {getProducts} from '../mooks/ItemList'
import Item from './item';

const ItemListContainer=()=>{    
    const [products, setProducts] = useState([]);
    const [cargando, setCargando] = useState(true);  

    useEffect(() => {
        setCargando(true)
        getProducts().then((data) => {setProducts(data)})
        .catch((error)=>console.error(error + 'HA OCURRIDO UN ERROR!!'))
        .finally(()=>setCargando(false))        
    },[])
    
    return(
        <>
           {cargando ? (<h2>Cargando.......</h2>):(products.map((products)=>(
            <Item products={products} key={products.id}/>)))                      
           }      
        </>
    )
}
export default ItemListContainer;   