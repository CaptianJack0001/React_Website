import React, { useState } from "react"; //import function for state

export default function Textform(props) {  //prop means passsing propetyy
  
  const handleupClick =()=>{   //text inside textarea
    console.log("uppercase was clicked", + text);   
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handletoClick =()=>{   //text inside textarea
    console.log("uppercase was clicked", + text);   
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  const handleOnChange=(event)=>{
  console.log("on change");
  setText(event.target.value);
  }
  
  const [text, setText] = useState("");
  
  return ( 
    <>
    <div>
      <h1>
        {props.heading} 
      </h1>   
      <div className="mb-3">        
        <label htmlFor="MyBox" className="form-label"></label>
        <textarea className="form-control"value={text} onChange={handleOnChange} id="MyBox" rows="4"></textarea>
        <button className="btn btn-primary mx-2" onClick={handleupClick} >Convert to upper case</button>   
        <button className="btn btn-primary mx-2 " onClick={handletoClick} >Convert to lower case</button>    
     
      </div>
    </div>
    <div className="container my-3">

      <h1>{text}</h1>
      <p>your text has {text.length}characters</p>   
      <p>And {text.split(" ").length} words</p>  

      <p>Time taken to read words is {text.split(" ").length*0.008}minutes</p>

    </div>
    
    </>
  );
}
