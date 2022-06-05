import React from "react";

const ExperienceItem = (props) => {
    return (
        <div class="experience-item">
            <div class="row">
                <div class="col-md-4">
                    <div class="experience-item-date">{props.date}</div>

                </div>
                <div class="col-md-4">
                    <div class="experience-item-company slide-title-sub company-blue">{props.company}<br></br>{props.title}</div>
                </div>
                <div class="col-md-4">
                    <div class="experience-item-title slide-title-sub">{props.location}</div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem;