import React from 'react';
import Awards from './Components/Awards';
import Contact from './Components/Contact';
import Landing from './Components/Landing';
import Experience from './Components/SlideExperience/Experience';


function App() {
  return (
    <div className='page'>
      <div id='navbar' className='sticky .fadeInDown'>
        <a href='./'>Shri Shrikesh Lathkar, IAS</a>
      </div>

      <div className='page1 bg-color' >
        <Landing />
      </div>

      <div className='page2 bg-color-alternate'>
        <Awards />
      </div>

      <div className='page3 bg-color'>
        <Experience />
      </div>

      <div className='page4 bg-color-alternate'>
        <Contact />
      </div>
    </div >
  );
}

export default App;
