import React,{useContext} from 'react';
import './ShoeCollection.css';
import ShoeBlock from '../ShoeBlock/ShoeBlock';
import { Cart } from '../../Context/Context';
import {products} from '../../data' 
function ShoeCollection() {
    
    const {cart,setcart}=useContext(Cart);

    function handleClick(obj){
        let index = cart.find(item => item.id === obj.id);
        if(index==null)
          {obj.quantity=1;
          setcart([...cart,obj]);}
        else{
            setcart( cart.map( (item)=> item.id===index.id? {...item, quantity:item.quantity+1}:item ) );
        }
    }

    return (
        
            <div className='shoe-sub-collection'>
                {
                    products.map(data=>
                        <div key={data.id} className="margin-block" onClick={() => handleClick(data)}><ShoeBlock image={data.image} title={data.title} price={data.price} id={data.id} /></div>
                    )
                }
            </div>
            
    )
}

export default ShoeCollection