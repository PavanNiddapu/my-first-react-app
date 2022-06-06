import React from "react";



const Card = (props) => {
    return (
        <div className="container">
            <div className="slide-num"></div>
            <div className="row align-items-center animate-element delay5 fadeInDown">
            </div>
            <div className="row award-list animate-element delay5 fadeInUp">
                <div className="col-lg-4">
                    <div className="award-item">
                        <div className="award-item-date">2015</div>
                        <div className="award-item-logo"><img src="img/pic1.png" alt="" /></div>
                        <div className="award-item-title slide-title-sub">Indian Express Devi Award</div>
                        <div className="award-item-descr slide-descr">for Innovation and Dynamism</div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="award-item">
                        <div className="award-item-date">2013</div>
                        <div className="award-item-logo"><img src="img/pic2.png" alt="" /></div>
                        <div className="award-item-title slide-title-sub">e-India Government Digital Initiative</div>
                        <div className="award-item-descr slide-descr">For e-health category Government Digital Initiative</div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="award-item">
                        <div className="award-item-date">2011-12 &amp; 2012-13</div>
                        <div className="award-item-logo"><img src="img/pic3.png" alt="" /></div>
                        <div className="award-item-title slide-title-sub">Chief Minister's Award</div>
                        <div className="award-item-descr slide-descr">For best district in 21 Point Flagship Programme</div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;

