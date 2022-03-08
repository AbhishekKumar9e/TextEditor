import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLwClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success");
    }
      const handleClearClick = ()=>{
        let newText ="";
        setText(newText);
        props.showAlert("Cleared successfully", "success");
  }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    // copy text 
    const handleCopy = ()=>{
         let newText = document.getElementById("myBox");
         newText.select();
         navigator.clipboard.writeText(newText.value);
    }
    // Remove Extra Spaces in the text
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "));
    }
    const [text, setText] = useState("");
    // setText = ("Enter new text");
  return (
    <>
    <div className='container' style={{color:props.mode === "light"?"black":"white"}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === "light"?"white":"grey", color:props.mode === "light"?"black":"white"}} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleLwClick}>Convert to lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
<hr/>
    </div>
    <div className='container my-2' style={{color:props.mode === "light"?"black":"white"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text:"Enter somethig to preview it here"}</p>
    </div>
    <hr/>
    </>
  )
}
