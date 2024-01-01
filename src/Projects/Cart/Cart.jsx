import React , {useState} from 'react'
import '../Cart/Cart.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Cart = () => {

    const [count , setCount] = useState(0)
    const [color , setColor] = useState('black')

    const handleClickAdd = ()=>{
        let newCount = count+1 
        setCount(newCount)
        if(newCount>=12){
            setColor('yellow')
        }
    }

    const handleClickRmv = ()=>{
        let newCount = count-1 
        setCount(newCount)
        if(newCount<12){
            setColor('black')
        }
    }

  return (
    <div className="container">
        <div className="cart">
            <AiOutlineShoppingCart className={`cart-icon ${color}`} /> <span>{count}</span>
        </div>
        <div className="btn-container">
            <button onClick={handleClickAdd} className='btn add-btn'>Add</button>
            <button onClick={handleClickRmv} className='btn rmv-btn'>Remove</button>
        </div>
    </div>
  )
}

export default Cart