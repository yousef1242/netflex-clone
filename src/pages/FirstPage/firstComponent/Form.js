

export const Form = (props) => {
    
  return (
    <div>
    <input type="text" placeholder='Your Name' value={props.correct} onChange={(e) => props.set(e.target.value)}/>
           {props.correct.length > 0 || props.correct.length > 1  ? <label style={{display:"block",fontSize:"20px"}}>invalid Name</label> : ""}
           {props.correct.length !== "" && props.correct.length > 1   ? <button onClick={() => props.log("SecondComponent")}>Get Started</button> : <button>Get Started</button>}
    </div>
  )
}
