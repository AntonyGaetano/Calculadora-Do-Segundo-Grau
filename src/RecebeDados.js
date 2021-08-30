import React,{useState} from 'react';
import Resultado from './Resultado'

export default function RecebeDados(props){
   
   const Style_input = {
     width:"126px",
     border:"none",
     borderBottom:'2px solid black', 
     margin:"1.5rem 0.8rem",
     textAlign:"center",
   }

   const[form, setform] = useState({'inputA':'','inputB':'','inputC':'' });

   const Manipulando = (e) =>{
     if(e.target.getAttribute("name") === "valorA"){
       setform({'inputA':e.target.value,'inputB':form.inputB,'inputC':form.inputC});
     }
     else if(e.target.getAttribute("name") === "valorB"){
      setform({'inputA':form.inputA,'inputB':e.target.value,'inputC':form.inputC});
    }
    else if(e.target.getAttribute("name") === "valorC"){
      setform({'inputA':form.inputA,'inputB':form.inputB,'inputC':e.target.value});
    }
   }

  return(
  <>
   <h3 style={{fontFamily:"cursive"}}>Calculadora Do Segundo Grau</h3> 

   <input style={Style_input} type="number" value={form.inputA} placeholder="Digite o valor de A" name="valorA" onChange={(e)=>Manipulando(e)}/>

   <input style={Style_input}  type="number" value={form.inputB} placeholder="Digite o valor de B" name="valorB" onChange={(e)=>Manipulando(e)}/>

   <input style={Style_input}  type="number" value={form.inputC} placeholder="Digite o valor de C" name="valorC" onChange={(e)=>Manipulando(e)}/>

   <p>{"Valor de A informado: " + form.inputA}</p>
   <p>{"Valor de B informado: " + form.inputB}</p>
   <p>{"Valor de C informado: " + form.inputC}</p>

   <Resultado ValorA={form.inputA} ValorB={form.inputB} ValorC={form.inputC}/>
  </>
  );
}

