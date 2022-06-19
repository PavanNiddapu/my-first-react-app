import React from "react";

const Contact = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-lg-10" style={{
                    marginTop: '5%',
                }}>

                    <div className="slide-title-sub">Software Developer,<br></br> TW, banglore</div>
                    <div className="slide-title-sub"><a href="tel:+99999999" class="phone-link">012-76765568</a></div>
                    <div className="text-md text-uppercase"><a href="mailto:somemaildummy@gmail.com" class="text-primary"><strong>somemail@gmail.com</strong></a></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;