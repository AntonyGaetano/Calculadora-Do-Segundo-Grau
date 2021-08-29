import React from 'react';
import RecebeDados from './RecebeDados';

import './App.css';

function App() {

  var num1 = 1;
  var num2 = -5;
  var num3 = 4;
 return(
 <>
  <RecebeDados letraA={num1} letraB={num2} letraC={num3}/>
  
 </>
 );
}

export default App;
