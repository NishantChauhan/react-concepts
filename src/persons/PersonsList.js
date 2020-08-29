import React, {Component} from "react";
import Person from "./Person";

class PersonsList extends Component {
    state = {persons:[]}
    componentDidMount() {
        fetch('http://localhost:6100/persons').then(response=> response.json()).then(data =>{
            this.setState({persons: data})
        })
    }

    render() {
        return (
            <div>
                <ol>
                    {this.state.persons.map((person) => <Person key={person.id} person={person}/>)}
                </ol>
            </div>
        )
    }
}

export default PersonsList;