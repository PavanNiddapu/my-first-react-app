import React from "react";

const Heading = (props) => {
    return (
        <h1 style={{
            fontFamily: "EB Garamond, sans-serif",
            color: '#b99e64',
            textTransform: 'uppercase',
            lineHeight: '1em',
            fontSize: '2.5em',
            marginTop: '0%'

        }}> {props.name}</h1 >
    )
}

export default Heading;