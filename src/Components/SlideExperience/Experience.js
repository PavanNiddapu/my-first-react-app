import React from "react";
import Heading from "../Heading";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
    return (
        <div>
            <Heading name="Experience" />
            <div class="container">
                <ExperienceItem
                    date="05/06/2018 - till date"
                    company="Infy Technologies"
                    title="Senior Sofware Dev"
                    location="Banglore"
                />
                <ExperienceItem
                    date="05/06/2016 - 05/06/2018"
                    company="A Startup"
                    title="Tech Architect"
                    location="Hyderabad"
                />
                <ExperienceItem
                    date="05/06/2015 - 05/06/2016"
                    company="Game Tech"
                    title="Game Developer"
                    location="Pune"
                />
                <ExperienceItem
                    date="05/06/2014 - 05/06/2015"
                    company="Toyota"
                    title="Software Developer"
                    location="Telangana"
                />
            </div>
        </div>
    )
}

export default Experience;