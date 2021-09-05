import React from 'react';

const Dados=()=>{
  return(
   <>
    <h1>Opa</h1>
   </>);
}

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

  return(
  <>
  <button style={{padding:"8px"}}    onClick="">Calcular</button>
   
  <Dados/>
  </>);
}
