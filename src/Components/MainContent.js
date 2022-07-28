import React from "react";
import Awards from './Awards';
import Contact from './Contact';
import Landing from './Landing';
import Experience from './SlideExperience/Experience';

const MainContent = (props) => {
    return (
        <div >
            <div id='navbar' className='sticky .fadeInDown'>
                <a href='./'
                    style={{
                        cursor: "default",
                        pointerEvents: "none"
                    }}
                >Shri Shrikesh Lathkar, IAS</a>
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
        </div>
    )
}

export default MainContent;