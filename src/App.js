import React from 'react';
import Contact from './Components/Contact';
import Heading from './Components/Heading';
import Landing from './Components/Landing';
import Experience from './Components/SlideExperience/Experience';
import ParallaxEffect from './parallex/ParallexEffect';


function App() {
  return (
    // <ParallaxEffect />
    <div className='page'>
      <div id='navbar' className='sticky .fadeInDown'>
        <a>Lalith N</a>
      </div>

      <div className='page1 bg-color' >
        <Landing />
      </div>

      <div className='page2 bg-color-alternate'>
        <Heading name="Awards" />
        <div className='row'>
          <div className='col-lg-3 col-md-3 feature-box'>
            <i className='icon-basic-world feature-box__icon' />
            <h3 className='heading-tertiary'>Expore the world</h3>
            <p className='feature-box__text'>
              A sample text in a feature box
            </p>
          </div>
          <div className='col-lg-3 col-md-3 feature-box'>
            <i className='icon-basic-map feature-box__icon' />
            <h3 className='heading-tertiary'>Expore the world</h3>
            <p className='feature-box__text'>
              A sample text in a feature box
              A sample text in a feature box
              A sample text in a feature box
              A sample text in a feature box

            </p>
          </div>
          <div className='col-lg-3 col-md-3 feature-box'>
            <i className='icon-basic-heart feature-box__icon' />
            <h3 className='heading-tertiary'>Expore the world</h3>
            <p className='feature-box__text'>
              A sample text in a feature box
            </p>
          </div>
          <div className='col-lg-3 col-md-3 feature-box'>
            <i className='icon-basic-compass feature-box__icon' />
            <h3 className='heading-tertiary'>Expore the world</h3>
            <p className='feature-box__text'>
              A sample text in a feature box
            </p>
          </div>

        </div>
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
