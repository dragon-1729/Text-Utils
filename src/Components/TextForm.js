import React, { useState } from 'react'

export default function TextForm(props) {
    const handleClick1 = (e) => {
        e.preventDefault();
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase","sucess")
    }
    const handleClick2 = (e) => {
        e.preventDefault();
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase","sucess")
    }
    const handleChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }
    const handleClick3 = (e) => {
        e.preventDefault();
        setText("");
        props.showAlert("Text Cleared","sucess")
    }
    const handleClick4 = (e) => {
        e.preventDefault();
        let arr = text.split(" ");
        setText("");
        let text1 = "";
        for(let i=0; i< arr.length;i++)
        {
            let word = arr[i];
            // let text2 =" "; my-1
            let temp = word[0].toUpperCase();
            for (let index = 1; index < arr[i].length; index++) {
                temp += arr[i][index];
                
            }
            text1 = text1 +temp +" ";
            // console.log(temp);
    
            
        }
        // console.log(text1);
        setText(text1);
        props.showAlert("Text Capitalized","sucess")
    }
    const handleCopy =(e)=>{
        e.preventDefault();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","sucess")
    }
    const handleSpaces = (e) =>{
        e.preventDefault();
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","sucess")
    }
    const wordCounter = (text) =>{
        if(text.trim().length===0)
            return 0;
        return text.trim().split(" ").length;
        
        // return newText.join(" ").split(" ").length;
        
        
    }
    const [text, setText] = useState('')

    return (
        <>
            <div className="container"><form>
                <div className={`form-group my-3 mx-3 text-${(props.mode==='dark')? 'light':'black'} `}>
                    <h2>{props.heading}</h2>
                    <textarea className={`form-control text-${(props.mode==='dark')? 'light':'black'}`} id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleChange} style={{backgroundColor: (props.mode==='dark') ? '#073f89':'white'}}></textarea>
                </div>
            </form></div>
            <div className="container">
            <button disabled = {text.length===0} className="btn btn-primary mx-1" type="submit" onClick={handleClick1}>ConvertToUppercase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" type="submit" onClick={handleClick2}>ConvertToLowercase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" type="submit" onClick={handleClick3}>Clear Text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" type="submit" onClick={handleClick4}>Capitalize case</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" type="submit" onClick={handleCopy}>Copy text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" type="submit" onClick={handleSpaces}>Remove Extra Spaces</button>
            </div>
            <div className={`container my-3 text-${(props.mode==='dark')? 'white':'#070421'} `} ><h1>Your text Summary</h1>
                <p>Time to read :{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} mins </p>
                <p>Number of words :{wordCounter(text)}          Number of characters: {text.length}</p>
                <h2>Preview</h2>
                <p>{(text.length > 0)?text:"Nothing to preview"}</p>
            </div>

        </>
    )
}
