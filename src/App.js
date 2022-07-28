import React, { useState } from 'react';
import MainContent from './Components/MainContent';
import Login from './Components/Login/Login';



function App() {

  const [flag, setFlag] = useState(false);

  let toggleFlag = () => { setFlag(!flag) }
  return (
    <div>
      <div className='page'>
        {flag && <MainContent />}
      </div >
      <div>
        {!flag && <Login afterValidHandler={toggleFlag} />}
      </div>
    </div>

  );
}

export default App;
