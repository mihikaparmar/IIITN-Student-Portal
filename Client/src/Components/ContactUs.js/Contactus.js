import React, { useState } from 'react';
import './Contactus.css'

const Contactus = () => {

    const [user,setUser]=useState({
        Name:"",
        Email:"",
        PhoneNumber:"",
        SocialHandles:"",
        Message:"",
    });
    let name,value;

    const getUsserData=(event)=>{
        name=event.target.name;
        value=event.target.value;

        setUser({...user,[name]:value})


    };
    const postData= async (e)=>{
        e.preventDefault();
        const {Name,Email,PhoneNumber,SocialHandles,Message}=user;
       const res=await fetch("https://iiit-ea274-default-rtdb.firebaseio.com/iiitn.json",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
             body:JSON.stringify({
                Name,
                Email,
                PhoneNumber,
                SocialHandles,
                Message,

             }),
        });
        if(res){
            setUser({
                Name:"",
        Email:"",
        PhoneNumber:"",
        SocialHandles:"",
        Message:"",
            });
            alert("Data is stored in database");
        }

    };

  return <div>
       <div className="container">
      <form class="form" method="POST">
         
  <h2 className='get'>Get In Touch</h2>
  <div className="styling">
  <p type="Name:"><input className='pp' name="Name" placeholder="Write your name here.."
  value={user.Name} onChange={getUsserData}></input></p>
  <p type="Email:"><input className='pp' name="Email" placeholder="Let us know how to contact you back.."
   value={user.Email} onChange={getUsserData}></input></p>
  <p type="Phone Number:"><input className='pp' name="PhoneNumber" placeholder="Enter your Phone Number.."
   value={user.PhoneNumber} onChange={getUsserData}></input></p>
  <p type="Social Handles:"><input className='pp' name="SocialHandles" placeholder="Enrer your social handles"
   value={user.SocialHandles} onChange={getUsserData}></input></p>
  <p type="Message:"><input className='pp' name="Message" placeholder="What would you like to tell us.."
   value={user.Message} onChange={getUsserData} ></input></p>
  <button  className='btn' onClick={postData}>Submit</button>
  </div>
  
</form>
</div>
  </div>;

};

export default Contactus;
