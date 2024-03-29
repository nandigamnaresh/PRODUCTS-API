
import { useEffect, useState } from 'react';
import Naresh from 'axios'


function App() {
  const [a,b]=useState([])
  
  useEffect(()=>
  {
    Naresh.get("http://127.0.0.1:5500/axios/src/Naresh.html").then(chinna=>{b(chinna.data)})
  })



  return (
   
    <div id='main'>
     
      {
        a.map(data=>
        <ul>
          <li>{data.NAME}</li>
          <li>{data.LOCATION}</li>
          <li>{data.AGE}</li>
          <li>{data.MOVIE}</li>
          <li>{data.DESCIPTION}</li>

        </ul>)
      }
    </div>

  );
}

export default App;
