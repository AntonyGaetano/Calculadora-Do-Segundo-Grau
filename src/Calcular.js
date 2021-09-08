import React from "react";


const Calculo = (a,b,c,sr1,sr2) =>{
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


export default function Calcular(props){

    return(
    <>
     {Calculo(props.a, props.b, props.c, props.sr1, props.sr2)}
    </>
    );
}