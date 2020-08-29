import React from "react";

const person = (props) =>{
    return(
            <li>{props.person.firstname} {props.person.lastname}</li>
    )
};

export default person;