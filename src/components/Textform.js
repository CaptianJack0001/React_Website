import React, { useState } from "react"; //import function for state
import PropTypes from 'prop-types'

export default function Textform(props) {  //prop means passsing propetyy
  
  const handleupClick =()=>{   //text inside textarea
    console.log("uppercase was clicked", + text);   
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upper case","success");
  }
  const handletoClick =()=>{   //text inside textarea
    console.log("uppercase was clicked", + text);   
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lower case","failure");
  }
  const handleOnChange=(event)=>{
  console.log("on change");
  setText(event.target.value);
  }
  
  const [text, setText] = useState("");
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}

  
  return ( 
    <>
    < div className="container"  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}}>
      <h1>
        {props.heading} 
      </h1>   
      <div className="mb-3">        
        <label htmlFor="MyBox" className="form-label"></label>
        <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="MyBox" rows="6"></textarea>
        <button className="btn btn-primary mx-2 my-3" onClick={handleupClick} >Convert to upper case</button>   
        <button className="btn btn-primary mx-2 my-3" onClick={handletoClick} >Convert to lower case</button>  
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>  
     
      </div>
    </div>
    <div className="container my-3"   style={{color:props.mode==='dark'?'white':'black'}}>

      <h1>{text}</h1>
      <p>your text has {text.length}characters</p>   
      <p>And {text.split(" ").length} words</p>  

      <p>Time taken to read words is  {text.split(" ").length*0.008}minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to preview it"}</p>

    </div>
    
    </>
  );
}
