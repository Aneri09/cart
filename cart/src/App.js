import logo from './logo.svg';
import './App.css';
import Cart from './Cart';
import { useState } from 'react';
import './Com.css'

function App() {

  
  let[data,setData]=useState(160)

 const total =(price)=>{
      setData(data+price)
 }

  return (
    <div className="box">
     <Cart name="Pizza" price={100} func={total}/>
     <Cart name="Burgur" price={120} func={total}/>
     <Cart name="drinks" price={140} func={total}/>


     <h2 className='price' >Price : {data}</h2>
    </div>
  );
}

export default App;