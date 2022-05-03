import React, {useState, useEffect} from 'react';
import './ItemList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {getProducts} from '../mocks/getProducts'
import Item from './Item';

const ItemList=()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);  

    useEffect(() => {
        setLoading(true)
        getProducts().then((data) => {setProducts(data)})
        .catch((error)=>console.error(error + 'HA OCURRIDO UN ERROR!!'))
        .finally(()=>setLoading(false))        
    },[])
    
    return(
        <>
           {loading ? (<h2>Cargando.......</h2>):(products.map((products)=>(
            <Item products={products} key={products.id}/>)))                      
           }      
        </>
    )
}
export default ItemList;   