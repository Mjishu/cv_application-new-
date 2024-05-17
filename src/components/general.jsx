// import React from "react";

export default function General(props){
    return(
        <div>
            {/* Where do i add the form submit button? Should I do it in app.jsx? Or do i not even need that field? */}
            <form className="GeneralForm" action=""> 
                <h2>General Information </h2>
                <div>
                    <label htmlFor="Name">Name: </label>
                    <input type="text"
                        name="name" 
                        id="Name" 
                        value={props.information.name}
                        onChange={props.handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" 
                            id="email"
                            name="email"
                            value={props.information.email}
                            onChange={props.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" 
                            id="phone"
                            name="phone"
                            value={props.information.phone}
                            onChange={props.handleChange}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="000-000-0000"
                    />
                </div>

            </form>


            {/* Should I pass this value up from the child to app and make an area that takes all the info? Idk if i can do that */}
        </div>
    )
}