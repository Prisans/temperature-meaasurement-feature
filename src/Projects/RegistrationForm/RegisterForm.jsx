import React , {useState} from 'react'

const RegisterForm = () => {

  const [value , setValue] = useState({
    firstName : '',
    lastName : '',
    email : ''

  })

  const [submitted , setSubmitted] = useState(false)

  const [valid , setValid] = useState(false)


  const handleChangeFirst = (e)=>{
    setValue({...value , firstName : e.target.value})
  }

  const handleChangeLast = (e)=>{
    setValue({...value , lastName : e.target.value})
  }

  const handleChangeEmail = (e)=>{
    setValue({...value , email : e.target.value})
  }

  const handleSubmit = (e) =>{
    if(value.firstName , value.lastName , value.email){
      setValid(true)
    }
    e.preventDefault();
    setSubmitted(true);
  }

  

  

  return (
    <div className="container">
        <form action="" className='form' onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-msg">Thanks for infoo!!!</div> : null }
        <input type="text" placeholder='First Name' value={value.firstName} onChange={handleChangeFirst}/>
        {submitted && !value.firstName ? <span>Please enter value</span> : null}
        <input type="text" placeholder='Last Name' value={value.lastName} onChange={handleChangeLast} />
        {submitted && !value.lastName ? <span>Please enter value</span> : null}
        <input type="email" placeholder='Email' value={value.email} onChange={handleChangeEmail} />
        {submitted && !value.email ? <span>Please enter value</span> : null}
        <button>Register</button>
        </form>
    </div>
  )
}

export default RegisterForm