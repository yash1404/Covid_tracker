import axios from 'axios'
import React, { useState } from 'react'
import "./Coviddata.css"
import Datashow from './Datashow'



function Coviddata() {

    const [userinput, setuserinput] = useState("")
    const[data,setdata]=useState("")

    //   getting user value
    const handleronchange = (e) => {
        setuserinput(e.target.value)
    }

   

    // getdata from server
    const Getdata= async ()=>{
        const Url=`https://disease.sh/v3/covid-19/countries/${userinput}`;
       const response =await axios.get(Url);
       setdata(response.data)
    }

    // handlesubmit
    const handlesubmit=(e)=>{
        Getdata()
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="head">Covid19_Tracker <i className="fas fa-virus"></i></h1>

            <marquee scrollamount="10"className="marquee"direction="right" width="80%">Check Live corona status in any device...</marquee>
            <div className="form">
                <form onSubmit={handlesubmit}>
                    <div className='oneinput'>

                        <input type="text" 
                        placeholder="Enter Country Name" className='inputfield' 
                        value={userinput} 
                        onChange={handleronchange}></input>

                    <button type="submit">
                    <i className="fas fa-search"></i>
                    </button>
            </div>
        </form>
        <Datashow data={data}/>
            </div>
    
        </div>
    )
}

export default Coviddata;


