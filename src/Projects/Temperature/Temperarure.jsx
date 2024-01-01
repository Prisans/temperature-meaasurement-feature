import React , {useState} from 'react'
import '../Temperature/Temperature.css'

const Temperarure = () => {
    const [count , setCount] = useState(0)
    const [myColor , setMyColor] = useState('cold')

    const handlePlus = () =>{
        let num = count +1;
        setCount(num);

        if(num>10){
            setMyColor('hot')
        }

        if(num>10){
            setMyColor('hot')
        }

    }

    const handleMinus = ()=>{
        let num  = count -1;
        setCount(num)

        if(num<=10){
            setMyColor('cold')
        }
    }

    

  return (
    <div className="container">
        
        <div className={`temp ${myColor}`}>
            <div className="txt">
            {count} *C
            </div>
        </div>
        <div className="btn">
            {/* <div className="btn plus" onClick={() => {handleClickPlus() ;  hand(); }}>+</div> */}
            <div className="btn plus" onClick={handlePlus}>+</div>
            <div className="btn minus" onClick={handleMinus} >-</div>
        </div>
    </div>
  )
}

export default Temperarure