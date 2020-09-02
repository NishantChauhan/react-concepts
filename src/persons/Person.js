import React from "react";
import {List} from "semantic-ui-react";

const person = (props) =>{
    return(
            <List.Item>{props.person.firstname} {props.person.lastname}</List.Item>
    )
};

export default person;