import React,{useState} from "react";
import './App.css';
import RecebeValores from "./RecebeValores";
import Calcular from "./Calcular";

const Style_p = {
   fontFamily:"serif",
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

       <RecebeValores a={valorA} sa={setValorA} b={valorB} sb={setValorB} c={valorC} sc={setValorC}/>
      
       <Calcular a={valorA} b={valorB} c={valorC} sr1={setraiz1} sr2={setraiz2}/>
       
       {Resultado(Resultado_raiz1,Resultado_raiz2)}
     </section>
    )
}
