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

  return(
  <>
   <br></br>
   <h4>Valores da raizes</h4>
   <p>{"Valor de x1 = " + x1}</p>
   <p>{"Valor de x2 = " + x2}</p>
  </>);
  
}