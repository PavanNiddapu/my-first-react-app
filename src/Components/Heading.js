import React from "react";

const Heading = (props) => {
    return (
        <h1 style={{
            fontFamily: "'MonumentExtended', sans-serif'",
            color: '#b99e64',
            textTransform: 'uppercase',
            lineHeight: '1.5em',
            fontSize: '4em',

        }}> {props.name}</h1 >
    )
}

export default Heading;