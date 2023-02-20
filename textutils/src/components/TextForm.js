import React , {useState} from 'react'
import propypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick =()=>{
     console.log("UpperCase was Clicked" + text);
     let newText = text.toUpperCase();
     setText(newText)
     props.showAlert("Converted to uppercase","success");
  }
  const handleLoClick =()=>{
    console.log("UpperCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
 }
 const handleClearClick =()=>{
  console.log("UpperCase was Clicked" + text);
  let newText = " ";
  setText(newText)
  props.showAlert("Text cleared","success");
}
const handleExtraSpaces =()=>{
  
  let newText = text.split(/[  ]+/);
  setText(newText.join(" "))
  props.showAlert("All extra spaces are removed","success");
}
const handleCopy =()=>{
  
  var text = document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to the clipboard","success");
}
  const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value);
 }
 
  const [text, setText] = useState('Enter text here');
  return ( 
    <>
    <div className='container' style= { {color:props.mode=='dark'?'white':'#001933'}}>
  <div className="mb-3">
    <label for="myBox" className="form-label"><h2>{props.heading} </h2></label>
    <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor:props.mode=='light'?'white':'#001933', color:props.mode=='dark'?'white':'#001933'}} id="myBox" rows="8"></textarea>
    <button className={`btn btn-primary mx-2`}  onClick={handleUpClick} >Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extraspaces</button>
   
  </div>
  </div>
  <div className="container my-2" style= { {color:props.mode=='dark'?'white':'#001933'}}>
    <h2>Your Text Summary</h2>
    <p>{text.length==0 ? "0":text.split(" ").length} words and {text.length} characters</p>
    <p>{ 0.008 * text.split(" ").length } Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0 ? text : "Enter something in the textbox to preview it here"}</p>
  </div>
  </>
  )
}
