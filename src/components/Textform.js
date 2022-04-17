import React,{useState} from 'react';


export default function Textform(props) {
  const handleOnChange=(event)=>{
    console.log(" Onchange");
    settext(event.target.value)
  }
  const handleUpClick=()=>{
console.log(text);
let newtext=text.toUpperCase();
settext(newtext)
props.showAlert("Converted to upper case","success");

  }
  const handleUpclick=()=>{
    console.log(text);
    let newtext=text.toLowerCase();
    settext(newtext)
    props.showAlert("Converted to lower case","success");
    
      }
      const handleUpclear=()=>{
        console.log(text);
        let newtext='';
        settext(newtext)
        props.showAlert("Cleared","success");
        
          }
          const handleExtraSpaces=()=>{
            let newtext=text.split(/[ ]+/);
            settext(newtext.join(" "));
            props.showAlert("Extra spaces removed","success");
          }
          const handleCopy=()=>{
            var text=document.getElementById("my-box");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied","success");
          }
          
  






  const [text, settext] = useState('');

    return (<>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}id="my-box" rows="9"></textarea>
  

</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>ChangetoUpper</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpclick}> ChangetoLower</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpclear}> Clear</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopy}> Copy</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra space</button>
</div>
<div className="container my-3" style={{backgroundColor:props.mode==='dark'?'darkblue':'white',color:props.mode==='dark'?'white':'black'}} >
  <h2>Your text summary </h2>
  <p>{text.split(" ").length-1}words and {text.length} character</p>
  
  <p>{text.split(".").length-1}sentence</p>
  <p>{0.008*text.split(" ").length-0.008}minutes reqiured to read</p>
 
  <h2>Preview</h2>
  <p>{text}</p>
  
  
</div>




</>
    )
}


