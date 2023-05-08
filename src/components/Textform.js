import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick =() => {
        // console.log("Uppercase was clicked." + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase" , "success")
    }
    const handleLoClick =() => {
        // console.log("Uppercase was clicked." + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase" , "success")
    }
    const handleCLClick =() => {
        // console.log("Uppercase was clicked." + text)
        let newText = "";
        setText(newText);
    }

    const handleOnChange =(event) => {
        // console.log("Onchange was clicked.");
        setText(event.target.value);
    }

    const boxClick =() => {
      // console.log("Box was clicked.");
      let stor = text;
      stor = stor.toLowerCase();
      if (stor === 'enter text here') {
        setText("");
      }
      
  }
    const[text,setText] = useState('Enter text here');
    // text = "new text"; // wrong way to change state

    // setText("New Text");
  return (
    <>
    
    <div className='container' style={{color: props.mode==='dark'?'white' : 'black'}}>
      
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value= {text}  onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white' , color: props.mode==='dark'?'white' : 'black'}} onClick={boxClick}></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>

        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCLClick}>Clear Text</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white' : 'black'}}>

      <h1 className='my-2'>Your Text Summary</h1>
      <p>{text.split(" ").length}words and {text.length} characters.</p>
      <p>Minutes to read your text is {text.split(" ").length *0.008} minutes.</p>
      <h3>Preview</h3>
      <p>{text.length>0? text : "Enter something to preview"}</p>
    </div>

    </>
  )
}
