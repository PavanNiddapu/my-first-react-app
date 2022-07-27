import React from "react";
import Heading from "../Heading";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
    return (
        <div>
            <Heading name="Experience" />
            <div class="container">
                <ExperienceItem
                    date="08/06/2021 - till date"
                    company="District Collector"
                    title=""
                    location="srikakulam"
                    color="company-green"
                />
                <ExperienceItem
                    date="17/09/2019"
                    company="AP Agros, Vice chairman & Managing Director"
                    title=""
                    location="Guntur"
                    color="company-blue"
                />
                <ExperienceItem
                    date="18/03/2018"
                    company="municipal commissioner"
                    title=""
                    location="Guntur"
                    color="company-indigo"
                />
                <ExperienceItem
                    date="06/12/2015"
                    company="Joint Collector"
                    title=""
                    location="Vizianagaram"
                    color="company-pink"
                />
            </div>
        </div>
    )
}

export default Experience;