import React, { useState } from 'react'

function Cart(props) {

    let[num,setNum]=useState(1)


    const add=()=>{
        setNum(num+1)
        props.func(props.price)
    }

    const sub =()=>{
       if(num==1){}
       else{
        setNum(num-1)
        props.func(-props.price)
       }
    }
 
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
        <button onClick={add}>+</button>
        <h1>{num}</h1>
        <button onClick={sub}>-</button>
    </div>
  )
}

export default Cart