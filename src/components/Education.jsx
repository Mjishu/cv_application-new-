// import React from "react"

export default function  Education (props){
    return (
        <div>
            <form action="" className="GeneralForm">
                <h2>Education Information</h2>
                <div>
                    <label htmlFor="institution">Institution: </label>
                    <input type="text"
                            name="institution"
                            id="institution"
                            value={props.information.institution}
                            onChange={props.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="studyTitle">Study Title: </label>
                    <input type="text" 
                            name="studyTitle"
                            id="studyTitle"
                            value={props.information.studyTitle}
                            onChange={props.handleChange}
                    />
                </div>
                <div>
                    <h4>Dates Studied</h4>
                    <label htmlFor="dateStudied">Started: </label>
                    <input type="date" 
                            id="dateStudied"
                            name="dateStudied"
                            onChange={props.handleChange}
                            value={props.information.dateStudied}
                            aria-label="date Started"
                    /><br />
                    <label htmlFor="dateGraduated">Graduated: </label>
                    <input type="date" 
                            name="dateGraduated"
                            id="dateGraduated"
                            onChange={props.handleChange}
                            value={props.information.dateGraduated}
                            aria-label="date graduated"

                    />
                </div>
            </form>
        </div>
    )
}