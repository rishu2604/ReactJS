import React, {useState} from 'react'


export default function TextForm(props) {
    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const UpperCase= ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("  Converted to UpperCase", "success");
    }
    const LowerCase= ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("  Converted to LowerCase", "success");
    }
    const ClearText= ()=>{
        let newText= '';
        setText(newText);
        props.showAlert("  Text Cleared", "success");
    }
    const CopyText= ()=>{
        var text= document.getElementById("exampleFormControlTextarea1");
        text.select();
        // text.setSelectionRange(0, 99999); WE CAN ALSO SET A RANGE TO SELECT THE TEXT
        navigator.clipboard.writeText(text.value);
        props.showAlert("  Text Copied", "success");
    }
    const removeExtraSpaces= ()=>{
        // REGEX FUNCTION OF JAVASCRIPT IS USED HERE
        // IT IS CREATING AN ARRAY OF WORDS BY SPLITTING THEM IF THEY HAVE ATLEAST ONE SPACE
        // AND THEN JOINING THEM BY A SINGLE SPACE
        let newText= text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("  Extra Spaces Removed", "success");
    }

    const[text, setText]= useState('Enter text');
    // WE CAN'T CHANGE THE VALUE OF ANY STATE (i.e text in our case)
    // SO, WE HAVE TO TAKE THE HELP OF useState FUNCTION
    // USE setText TO CHANGE THE VALUE OF ANY STATE
    // setText("newtext");

    return (
    <>
        <div className="mb-3 container" style={{color: props.mode==='light'?'black':'white'}}>
            <h2 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h2>
            <label htmlFor="exampleFormControlInput1" className="form-label" style={{color: props.mode==='light'?'black':'white'}}>Email address</label>
            <input type="email" className="form-control"  id="exampleFormControlInput1" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}}/>
        </div>
        <div className="mb-3 container" style={{color: props.mode==='light'?'dark':'light'}}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: props.mode==='light'?'black':'white'}}>Enter the text here</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div>
            <buttton className="btn btn-primary mx-3" onClick={UpperCase}>Convert to Uppercase</buttton>
            <buttton className="btn btn-primary mx-3" onClick={LowerCase}>Convert to LowerCase</buttton>
            <buttton className="btn btn-primary mx-3" onClick={ClearText}>Clear Text</buttton>
            <buttton className="btn btn-primary mx-3" onClick={CopyText}>Copy Text</buttton>
            <buttton className="btn btn-primary mx-3" onClick={removeExtraSpaces}>Remove Extra Spaces</buttton>

        </div>
        <div className="mb-3 container my-2">
            <h2 style={{color: props.mode==='light'?'black':'white'}}>Your Text Summary</h2>
            <p style={{color: props.mode==='light'?'black':'white'}}>{text.split(" ").length} words, {text.length} characters</p>
            <p style={{color: props.mode==='light'?'black':'white'}}>Average time to read the text = {0.008*text.split(" ").length} minutes</p>
            <h3 style={{color: props.mode==='light'?'black':'white'}}>Preview</h3>
            <p style={{color: props.mode==='light'?'black':'white'}}>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
        </div>
    </>
    )
}
