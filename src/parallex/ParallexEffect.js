import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Heading from "../Components/Heading";
const ParallaxEffect = () => {

    return (
        <Parallax pages={4} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                offset={0}
                speed={1}
                factor={2}
                style={{
                    // backgroundImage: `url(${img1})`,
                    backgroundColor: '#f5f4f0',
                    backgroundSize: 'cover'
                }}>
                <h2>Page 1</h2>

                <div class="container" style={{
                    marginTop: '30%',
                }}>
                    <div class="row">
                        <div class="col-sm-6 col-10">
                            <h3 class="slide-title-sub"><font color="#b99e64" size="3px">Software Employee, at TW </font><br></br> <font size="1px">Domains: BlockChain, AI, Cloud, Machine Learning, Backend Engineering</font></h3>
                            <h3 class="slide-title-sub"><font color="#b99e64" size="3px">Focus on Reactive Stack</font></h3>
                        </div>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.5}
                factor={2}
                style={{
                    // backgroundImage: `url(${img2})`,
                    backgroundSize: 'cover',
                    backgroundColor: '#f5f4f0'
                }}>
                <h2>Page 2</h2>
                <Heading name={"Projects"} />
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0.7}
                factor={1}
                style={{
                    // backgroundImage: `url(${img2})`,
                    backgroundSize: 'cover',
                    backgroundColor: 'rgb(248 240 208)'
                }}>
                <h2>Page 3</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={0.2}
                factor={1}
                style={{
                    // backgroundImage: `url(${img2})`,
                    backgroundSize: 'cover',
                    backgroundColor: 'rgb(137 131 110)'
                }}>
                <h2>Page 4</h2>
            </ParallaxLayer>
        </Parallax >)
}

export default ParallaxEffect;