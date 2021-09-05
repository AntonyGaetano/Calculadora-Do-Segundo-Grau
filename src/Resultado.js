import React from 'react';

export default function Resultado(props){

 var A;
 var B;
 var C;
 var raiz;

 A = props.ValorA;
 B = props.ValorB;
 C = props.ValorC;
 
 var delta = (B*B - 4*A*C);
  raiz = Math.sqrt(delta);

 var x1 = (-B+raiz)/2*A;
 var x2 = (-B-raiz)/2*A; 

 const Dados = () =>{
  return(
   <>
    
   </>);
  }

  return(
  <>
  <button style={{padding:"8px"}} onClick={()=>Dados()}>Calcular</button>
  </>);

}
