import React,{useState} from "react";
import './App.css';

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

const Style_p = {
   fontFamily:"serif",
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

const Calcular = (a,b,c,sr1,sr2) =>{
    const calc = () =>{
        var A = a;
        var B = b;
        var C = c;
        var Raiz;
        var x1;
        var x2;
        
        var delta = (B*B - 4*A*C);
        if(delta >= 0){
            
            Raiz = Math.sqrt(delta);
       
             x1 = (-B+Raiz)/2*A;
             x2 = (-B-Raiz)/2*A;
         
            sr1(x1);
            sr2(x2);
        }
        else{
            Raiz = Math.sqrt(delta*-1);
           alert("O resultado é raizes imaginárias")
             x1 = -B/2*A+" + "+Raiz/2*A+"i";
             x2 = -B/2*A+" - "+Raiz/2*A+"i";

           sr1(x1);
           sr2(x2);
           
        }
    

    }
    return(
        <div>
            <button style={{padding:"0.6rem 1.3rem", backgroundColor:"#282c34", color:"white", borderRadius:"5px"}} onClick={calc}>Calcular</button>
        </div>
    )
}

const Resultado = (r1,r2) =>{
    return(
    <div>
        <p style={Style_p} >{"Resultado de x1:  " + r1}</p>
        <p style={Style_p}>{"Resultado de x2:  " + r2}</p>
    </div>
    )
}

export default function App2(){
    
    const[valorA,setValorA]=useState(0)
    const[valorB,setValorB]=useState(0)
    const[valorC,setValorC]=useState(0)
    const[Resultado_raiz1,setraiz1]=useState(0)
    const[Resultado_raiz2,setraiz2]=useState(0)


    return(
     <section>
       <h3 style={{fontFamily:"cursive"}}>Calculadora Do Segundo Grau</h3> 
       <div className="input-dados"> 
         {ValorA(valorA,setValorA)}
         {ValorB(valorB,setValorB)}
         {ValorC(valorC,setValorC)}
       </div>
       {Calcular(valorA,valorB,valorC,setraiz1,setraiz2)}
       {Resultado(Resultado_raiz1,Resultado_raiz2)}
     </section>
    )
}
