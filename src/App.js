import React from 'react';
import Contact from './Components/Contact';
import Heading from './Components/Heading';
import Experience from './Components/SlideExperience/Experience';
import ParallaxEffect from './parallex/ParallexEffect';


function App() {
  return (
    // <ParallaxEffect />
    <div className='page'>
      <div className='page1 bg-color'>
        <Heading name="Lalith" />
        {/* <div className="header-bg">
        <div className="no-deco">
          <a href="#Myself"> Lalith Niddapu </a>
        </div>
      </div> */}
        <div class="row">
          <div class="col-sm-6 col-10">
            <h3 className="slide-title-sub"><font color="#b99e64" size="3px">Software Employee, at TW </font><br></br> <font size="1px">Domains: BlockChain, AI, Cloud, Machine Learning, Backend Engineering</font></h3>
            <h3 className="slide-title-sub"><font color="#b99e64" size="3px">Focus on Reactive Stack</font></h3>
          </div>
        </div>
      </div>

      <div className='page2 bg-color-alternate'>
        <Heading name="Awards" />
        here comes my award cards
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
