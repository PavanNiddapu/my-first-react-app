import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Heading from "../Components/Heading";
import Contact from "../Components/Contact";
import Card from "../Components/Card";
import Experience from "../Components/SlideExperience/Experience";
const ParallaxEffect = () => {

    return (
        <Parallax pages={4} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                sticky={{ start: 0, end: 4 }}
                style={{
                    // backgroundImage: `url(${img1})`,
                    backgroundColor: '#f0eee5',
                    backgroundSize: 'cover',
                    height: '10%'
                }}
            >
                <div className="header-bg">
                    <div className="name">
                        <a href="#Myself">
                            <div className="font-custom">Lalith Niddapu</div>
                        </a>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                // speed={1}
                factor={1}
                style={{
                    // backgroundImage: `url(${img1})`,
                    backgroundColor: '#f5f4f0',
                    backgroundSize: 'cover',
                    // border: 'solid 10px green',
                    height: '25%'

                }}>
                <div class="container" style={{
                    marginTop: '18%',
                }}>
                    <div class="row">
                        <div class="col-sm-6 col-10">
                            <h3 className="slide-title-sub"><font color="#b99e64" size="3px">Software Employee, at TW </font><br></br> <font size="1px">Domains: BlockChain, AI, Cloud, Machine Learning, Backend Engineering</font></h3>
                            <h3 className="slide-title-sub"><font color="#b99e64" size="3px">Focus on Reactive Stack</font></h3>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={1}
                speed={0.2}
                // factor={1}
                style={{
                    // backgroundImage: `url(${img2})`,
                    backgroundSize: 'cover',
                    backgroundColor: '#ffffff',
                    // border: 'solid 10px yellow',
                    // height: '1%'
                }}>
                <Heading name={"PROJECTS"} />
                <Card />
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0.5}
                factor={1}
                style={{
                    // backgroundImage: `url(${img2})`,
                    backgroundSize: 'cover',
                    backgroundColor: '#f5f4f0',
                    // border: 'solid 10px blue',
                    height: '25%'
                }}>
                <Heading name={"EXPERIENCE"} />
                <Experience />
            </ParallaxLayer>

            <ParallaxLayer offset={3}
                speed={0.1}
                factor={0.1}
                style={{
                    // backgroundImage: `url(${img2})`,
                    backgroundSize: 'cover',
                    backgroundColor: '#ffffff',
                    // border: 'solid 10px pink',
                }}>
                <Heading name={"CONTACT"} />
                <Contact />
            </ParallaxLayer>
        </Parallax >)
}

export default ParallaxEffect;