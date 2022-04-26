import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemCount.css'

const ItemCount=({counter, stock, subtract, sumar, reset})=>{
   if (counter<stock){  
            if(counter>=1 && stock>=1){
                return(
                    <>
                        <button onClick={subtract} className="btn btn-secondary">RESTAR</button>
                        <button onClick={sumar} className="btn btn-secondary">COMPRAR</button>
                        <button onClick={reset} className="btn btn-secondary">ANULAR</button>
                        <h3>{counter}</h3>
                        <button className="btn btn-secondary">AGREGAR A CARRITO</button>  
                    </>
                )
            }else if (counter<=1 && stock>=1){
                return(
                    <>  
                        <button className="btn btn-secondary">RESTAR</button>
                        <button onClick={sumar} className="btn btn-secondary">COMPRAR</button>
                        <button className="btn btn-secondary">ANULAR</button>           
                        <h3>{counter}</h3>
                        <button className="btn btn-secondary">AGREGAR A CARRITO</button>  
                    </>
                )  
            }       
    } else if (stock<=0){
        return(
            <>              
                <h3>SIN STOCK!</h3>
            </>
        )
    } 
    else return(
        <> 
           <button onClick={subtract} className="btn btn-secondary">RESTAR</button>
           <button className="btn btn-secondary">COMPRAR</button>
           <button onClick={reset} className="btn btn-secondary">ANULAR</button>                   
           <h3>{counter}</h3>
           <button className="btn btn-primary">AGREGAR A CARRITO</button>
        </>
    )  
}
export default ItemCount;