import React from "react";
import Award from "./Award";
import Heading from "./Heading";

const Awards = (props) => {
    // let para = "This is some sample content  This is some sample content This is some sample content"
    return (
        <div>
            <Heading name="Awards" />

            <div className="row">
                <Award title="Skoch Award" content="Ease of doing business" icon="icon-basic-world" />
                <Award title="Award 2 name here" content="Award Description" icon="icon-basic-book" />
                <Award title="Award 3 name here" content="Award Description" icon="icon-basic-notebook-pen" />
                <Award title="Award 4 name here" content="Award Description" icon="icon-basic-notebook" />
            </div>
        </div>
    )
}

export default Awards;