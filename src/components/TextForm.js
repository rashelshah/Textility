import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
     let newText = text.toUpperCase();
     setText(newText);
      props.showAlert("Text coverted to Uppercase", "success");
       }
    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text coverted to Lowercase", "success");
     }
     const handleClearClick = () => {
      let newText = ''
      setText(newText);
      props.showAlert("Text cleared", "success");
     }
     const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied", "success");
     }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const[text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'light'?'white':'#010310', color: props.mode === 'light'?'black':'white'}} value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
    <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowecase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    
    
    
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview it"}</p>
    </div>
    </>
  )
}
