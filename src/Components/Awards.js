import React from "react";
import Award from "./Award";
import Heading from "./Heading";

const Awards = (props) => {
    let para = "This is some sample content  This is some sample content This is some sample content"
    return (
        <div>
            <Heading name="Awards" />

            <div className="row">
                <Award title="Explore the World" content="This is some sample content" icon="icon-basic-world" />
                <Award title="Explore the World" content="This is some sample content" icon="icon-basic-book" />
                <Award title="Explore the World" content={para} icon="icon-basic-map" />
                <Award title="Explore the World" content="This is some sample content" icon="icon-basic-heart" />
            </div>
        </div>
    )
}

export default Awards;