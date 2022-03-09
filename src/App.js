import React from 'react';
import './App.css';
import Reactuser from './reactUser';
import User from './User';
const userContext = React.createContext();
function App(){
  return(
   //the comment part is for propdrilling example.Above i created context that is for Reactcontext api
    // <div>
    // <User name = 'JamesBond' age = '27'/>

    // </div>

//here is for reactcontext api


<div>

<userContext.Provider value>

<Reactuser/>
</userContext.Provider>

</div>

  
   
  )
}
export default App;