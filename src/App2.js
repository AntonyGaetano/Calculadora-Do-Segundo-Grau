import React,{useState} from "react";

const ValorA = (a,sa)=>{
  return(
   <div>
       <labe>
           ValorA:
           <input type="text" value={a} onChange={(e)=>sa(e.target.value)}/>
       </labe>
   </div>
  )
}

const ValorB = (b,sb)=>{
    return(
        <div>
            <labe>
                ValorB:
                <input type="text" value={b} onChange={(e)=>sb(e.target.value)}/>
            </labe>
        </div>
       )
}

const ValorC = (c,sc)=>{
    return(
        <div>
            <labe>
                ValorC:
                <input type="text" value={c} onChange={(e)=>sc(e.target.value)}/>
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
        
        var delta = (B*B - 4*A*C);
        Raiz = Math.sqrt(delta);
       
        var x1 = (-B+Raiz)/2*A;
        var x2 = (-B-Raiz)/2*A;
        
        sr1(x1);
        sr2(x2);
    }
    return(
        <div>
            <button onClick={calc}>Calcular</button>
        </div>
    )
}

const Resultado = (r1,r2) =>{
    return(
    <div>
        <p>{"Resultado de x1:  " + r1}</p>
        <p>{"Resultado de x2:  " + r2}</p>
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
     <>
      {ValorA(valorA,setValorA)}
      {ValorB(valorB,setValorB)}
      {ValorC(valorC,setValorC)}
      {Calcular(valorA,valorB,valorC,setraiz1,setraiz2)}
      {Resultado(Resultado_raiz1,Resultado_raiz2)}
     </>
    )
}