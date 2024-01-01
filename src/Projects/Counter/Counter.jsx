import React , {useState} from 'react'

const Counter = (props) => {

    const [count , setCount] = useState(0)

    const handleClick = () =>{
        setCount(count+ props.num)
    }

  return (
    <div>
        <h1>count : {count}</h1>
        <button onClick={handleClick} >Increment</button>
    </div>
  )
}

export default Counter