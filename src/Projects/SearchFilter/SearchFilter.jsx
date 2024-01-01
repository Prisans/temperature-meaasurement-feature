import React , {useState} from 'react'
import JSONDATA from './MOCK_DATA.json'


const SearchFilter = () => {

    const [searchTerm , setSearchTerm] = useState('')

  return (
    <div className='container' >
        <div className="inputVal">
        <input type="text" placeholder='Search...' className='inp' onChange={e=>setSearchTerm(e.target.value)}/>
        </div>

        <div className="data">
            {
                JSONDATA.filter((val)=>{
                    if(searchTerm === ''){
                        return val;
                    }
                    else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                    }

                }).map((val ,key)=>{
                    return(
                        <div className="user-data" key={key}>
                        <p>{val.first_name}</p>
                    </div>
                    );
                })
            }
        </div>

    </div>
  )
}

export default SearchFilter