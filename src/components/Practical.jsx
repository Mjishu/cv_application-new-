export default function Practical(props){
    return(
        <div>
            <form action="" className="GeneralForm">
                <h2>Practical Information</h2>
                <div>
                    <label htmlFor="company">Company: </label>
                        <input type="text" 
                                id="company"
                                name="company"
                                onChange={props.handleChange}
                                value={props.information.company}
                        />
                </div>
                <div>
                    <label htmlFor="positon">Position: </label>
                        <input type="text"
                                id="position"
                                name="position"
                                onChange={props.handleChange}
                                value={props.information.position}
                        />
                </div>
                <div>
                    <label htmlFor="responsibilities">Responsiblities: </label>
                        <input type="text"
                                id="responsibilities"
                                name="responsibilities"
                                value={props.information.responsibilities}
                                onChange={props.handleChange}
                        />
                    </div>
                <div>
                    <h4>Dates Worked</h4>
                    <label htmlFor="dateStarted"> Started: </label>
                        <input type="date" 
                                id="dateStarted"
                                name="dateStarted"
                                onChange={props.handleChange}
                                value={props.information.dateStarted}
                                aria-label="date Started"
                        /><br />
                    <label htmlFor="dateEnd">Ended: </label>
                        <input type="date" 
                                id="dateEnd"
                                name="dateEnd"
                                onChange={props.handleChange}
                                value={props.information.dateEnd}
                                aria-label="date ended"
                        />
                    </div>
            </form>
        </div>
    )
}