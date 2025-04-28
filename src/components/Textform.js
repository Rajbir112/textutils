import React ,{useState}from 'react'
export default function Textform(props) {
    const [text,settext] = useState("")
    const [color,setColor] = useState("#000")
    const handleOnChange =(event)=>{
        console.log("on change");
        settext(event.target.value);
        giveColor();
    }
    const handleUpClick =()=>{
        const newText = text.toUpperCase();
        settext(newText);
        props.showAlert('success','In uppercase ')
    }
    const giveColor =()=>{
      let randomNum = Math.floor(Math.random() * 99)
      const colors =[
        "#FF5733", "#C70039", "#900C3F", "#581845", "#FFC300", "#DAF7A6", "#28B463", "#1F618D",
        "#6C3483", "#A569BD", "#3498DB", "#2980B9", "#5DADE2", "#1ABC9C", "#16A085", "#2ECC71", "#27AE60", "#F1C40F",
        "#F39C12", "#E67E22", "#D35400", "#E74C3C", "#C0392B", "#ECF0F1", "#BDC3C7", "#95A5A6", "#7F8C8D", "#34495E",
        "#2C3E50", "#8E44AD", "#9B59B6", "#D2B4DE", "#FAD7A0", "#F5B7B1", "#F1948A", "#E59866", "#D7DBDD", "#AAB7B8",
        "#85929E", "#5D6D7E", "#2E4053", "#1C2833", "#F8C471", "#F7DC6F", "#F4D03F", "#F0B27A", "#EB984E", "#E67E22",
        "#D35400", "#CD6155", "#C0392B", "#A93226", "#922B21", "#7B241C", "#641E16", "#512E5F", "#4A235A", "#6C3483",
        "#7D3C98", "#884EA0", "#A569BD", "#BB8FCE", "#D2B4DE", "#E8DAEF", "#FAD7A0", "#F5B7B1", "#F1948A", "#E59866",
        "#D7DBDD", "#AAB7B8", "#85929E", "#5D6D7E", "#2E4053", "#1C2833", "#F8C471", "#F7DC6F", "#F4D03F", "#F0B27A",
        "#EB984E", "#E67E22", "#D35400", "#CD6155", "#C0392B", "#A93226", "#922B21", "#7B241C", "#641E16", "#512E5F",
        "#4A235A", "#6C3483", "#7D3C98", "#884EA0", "#A569BD", "#BB8FCE", "#D2B4DE", "#E8DAEF"
        ];
      setColor(colors[randomNum]);
    }
    return (
      <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
     <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea style={{ color: color }} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea> {/* onchange is import to write in 
  text area  without onchange it gives the error */}
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
     <div className=" container my-2">
     <h1> Your text summary</h1>
      <p> {text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.replace(/\s/g, "").length} characters</p>
      <p>{0.008 * text.trim().split(/\s+/).filter(word => word.length > 0).length} minutes to read</p>
      <h2>preview</h2>
      <p>{text}</p>
      </div> 
    </div>
  )
} 
