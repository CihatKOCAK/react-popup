import Popup from "./components/Popup";
import {useEffect, useState} from 'react'

function App() {
  const [buttonPopup,setButtonPopup] = useState(false);
  const [timedPopup,setTimedPopup] = useState(false);

  

  useEffect(() => {
    setTimeout(() => {
    setTimedPopup(true);
  },2000 );
  }, []);

  return (
    <div className="App">
      <main>
        <h1>React Popups</h1>
        <br /><br />
        <button onClick={()=> setButtonPopup(true)}>Open Popup</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger = {setButtonPopup} >
        <h3>My popup</h3>
        <p>This is my button triggered popup</p>
      </Popup>

      <Popup trigger={timedPopup} setTrigger = {setTimedPopup} >
        <h3>My popup</h3>
        <p>This is my button triggered popup</p>
      </Popup>
    </div>
  );
}

export default App;
