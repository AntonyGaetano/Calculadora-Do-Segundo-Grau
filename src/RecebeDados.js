import React,{useState} from 'react';
import Resultado from './Resultado'

export default function RecebeDados(props){
 
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
   <input type="number" name="valorA" onChange={(e)=>Manipulando(e)}/>

   <input type="number" name="valorB" onChange={(e)=>Manipulando(e)}/>

   <input type="number" name="valorC" onChange={(e)=>Manipulando(e)}/>

   <p>{"Valor de A: " + form.inputA}</p>
   <p>{"Valor de B: " + form.inputB}</p>
   <p>{"Valor de C: " + form.inputC}</p>

  </>
  );
}

