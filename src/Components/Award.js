import React from "react";

const Award = (props) => {
    return (
        <div className='col-lg-3 col-md-3 feature-box'>
            <i className={props.icon + ` feature-box__icon`} />
            <h3 className='heading-tertiary'>{props.title}</h3>
            <p className='feature-box__text'>
                {props.content}
            </p>
        </div>
    )
}

export default Award;