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
   {alert(x1>=0&&x2>=0 ? "Valor de x1 = " + x1 + " Valor de x2 = " + x2 : "Raizes menores que zero")}
   </>);
  }

  return(
  <>
  <button style={{padding:"8px"}} onClick={()=>Dados()}>Calcular</button>

  </>);

}
