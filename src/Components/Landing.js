import React from "react";

const Landing = (props) => {
    return (
        <div class="row">
            <div class="col-sm-9 col-lg-9 col-md-9">
                <h3 className="slide-title-sub"><font color="#b99e64" size="3px">{"Collector & District Magistrate"}</font></h3>
                <h3 className="slide-title-sub-domain">
                    <font> Domains:</font>
                    <font size="1px"> Agriculture, Health, Education, Irrigation, Social Welfare, Energy</font>
                    <br></br>
                    <font>Welfare Schemes, E-Governance</font>
                </h3>
                <h3 className="slide-title-sub"><font color="#b99e64" size="3px">Srikakulam, Andhra Pradesh</font></h3>
            </div>
            <div className="composition">
                <img id='profile-img' alt="" src="photo-1.jpeg" />
                <img id='profile-img' alt="" src="photo-2.jpeg" />
                <img id='profile-img' alt="" src="photo-3.jpeg" />
            </div>
        </div >
    )
}

export default Landing;