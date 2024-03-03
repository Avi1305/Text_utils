import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const [UpperText,setUpperText] = useState("");
    const handleUpClick = () =>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setUpperText(newText);
        props.showalert("Converted to UpperCase","success")
    };
    const handleLoClick = () =>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toLowerCase();
        setUpperText(newText);
        props.showalert("Converted to LowerCase","success")
    };
    const handleOnChange = (event) =>{
        // console.log("OnChange")
        setText(event.target.value);
    };

    return (
        <> 
            <div className="mb-3"  style={{color:props.mode==="light"?"black":"white" }}>
                <h1>{props.heading} </h1>
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white" }} id="myBox" rows="8"></textarea>
                <button onClick={handleUpClick} className="btn btn-primary my-3 mx-2">Convert to Uppercase</button>
                <button onClick={handleLoClick} className="btn btn-primary my-3 mx-2">Convert to Lowercase</button>
            </div>
            <div className="container" style={{color:props.mode==="light"?"black":"white" }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{ 0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                {/* <p>{UpperText}</p> */}
                <p>{UpperText.length>0?UpperText:"Enter text to preview it here"}</p>
            </div>
        </>
    )
}
