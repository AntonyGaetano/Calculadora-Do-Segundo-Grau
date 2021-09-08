import React from "react";


const Style_input = {
    width:"126px",
    border:"none",
    borderBottom:'2px solid black', 
    margin:"1.5rem 0.8rem",
    textAlign:"center",
    padding:'0.3rem',
    fontSize:'15px',
    fontFamily:"cursive"
  }

const ValorA = (a,sa)=>{
    return(
     <div>
         <labe>
             ValorA:
             <input style={Style_input} type="text" value={a} onChange={(e)=>sa(e.target.value)}/>
         </labe>
     </div>
    )
  }
  
  const ValorB = (b,sb)=>{
      return(
          <div>
              <labe>
                  ValorB:
                  <input style={Style_input} type="text" value={b} onChange={(e)=>sb(e.target.value)}/>
              </labe>
          </div>
         )
  }
  
  const ValorC = (c,sc)=>{
      return(
          <div>
              <labe>
                  ValorC:
                  <input style={Style_input} type="text" value={c} onChange={(e)=>sc(e.target.value)}/>
              </labe>
          </div>
         )
  }
  


export default function RecebeValores(props){

    return(
        <>
        {ValorA(props.a, props.sa )}
        {ValorB(props.b, props.sb )}
        {ValorC(props.c, props.sc )}
        </>
    )
}