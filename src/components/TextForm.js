import React, {useState} from "react";
import "./TextForm.css";


export default function TextForm(props){

    const [text, setText] = useState("");
    const [searchWord, setSearchWorld] = useState("");
    const [foundWord,setFoundWord] = useState(0);
    const [isFindButtonClicked, setIsFindButtonClicked] = useState(false);

    const handleChange = (event)=>{
        setText(event.target.value);
        setIsFindButtonClicked(false);
    }
    const changeUpperCase = () =>{
        //console.log(text);
        setText(text.toUpperCase());
        props.showAlert("success","converted to uppercase");
    }
    const changeLowerCase = () =>{
        //console.log(text);
        setText(text.toLowerCase());
        props.showAlert("success","converted to lowercase");
    }
    const clearText = () =>{
        setText("");
        setIsFindButtonClicked(false);
        setSearchWorld("");
    }
    const countWords = (text) =>{
        const trimmedText = text.trim();
        if(trimmedText===""){
            return 0; 

        }else{
            const textArr = trimmedText.trim().split(/[\s,;.!?\-]+/);
            if(textArr[textArr.length-1]==="") textArr.pop();
            //console.log(textArr)
            return textArr.length;
        }
       
    }
    const searchFields = (event) =>{
        setSearchWorld(event.target.value.trim());
        setIsFindButtonClicked(false)
    }
    const findWord = ()=>{
        console.log(text);
        const paragraphArr = text.trim().split(/[\s,;.!?\-]+/);
        const findWords = [];
        for(let i = 0; i<paragraphArr.length; i++){
            if(paragraphArr[i].toLowerCase()===searchWord.toLowerCase()){
                findWords.push(paragraphArr[i]);
            }
        }
        console.log(paragraphArr);
        console.log(findWords);
        setFoundWord(findWords.length);
        console.log(foundWord);
        setIsFindButtonClicked(true);
    }
    
    return(
        <>
        <div className="container">
            <h1 style={{color:`${props.mode==='dark'? 'white': 'black'}`}}>{props.heading}</h1>
            <textarea className="form-control" style={{backgroundColor:`${props.mode==='dark'? '#4e4c4c': '#f9f0f0'}`,color:`${props.mode==='dark'? 'gray': 'black'}`}} id="exampleFormControlTextarea1" rows="8" value={text} onInput={handleChange}></textarea>
            <button className="btn btn-primary my-3" onClick={changeUpperCase}>Click for UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={changeLowerCase}>Click for LOWERCASE</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear text</button>
            <input className="form-control me-2" style={{backgroundColor:`${props.mode==='dark'? 'black': 'white'}`,color:`${props.mode==='dark'? 'gray': 'black'}`}} type="search" placeholder="Enter word you want to find" aria-label="Search" onChange={searchFields}/>
            <button className="btn btn-success my-3 foundbutton" onClick={findWord}>Find</button>
            {isFindButtonClicked && (
                <span className="foundword"> {foundWord} words found</span>
            )}
            
        </div>
        <div className="container">
           <p>{countWords(text)} Words, {text.length} Alphabates</p>
        </div>
        </>
    ) 
}