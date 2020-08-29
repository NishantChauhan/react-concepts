import React, {Component} from "react";
import Person from "./Person";
import AddPerson from "./AddPerson.js";

class PersonsList extends Component {
    baseURL = 'http://localhost:6100/';
    state = {persons: [], addMorePersons: false}

    handleAddPerson(person) {
        fetch(this.baseURL + '/person', {
            method: 'POST', body: JSON.stringify(person),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        }).then(response=>response.json()).then(data=>{
            if (!data.error) {
                this.setState({persons: this.state.persons.concat(data), addMorePersons: false})
            }
        })
    }

    componentDidMount() {
        fetch(this.baseURL + '/persons').then(response => response.json()).then(data => {
            if (!data.error) {
                this.setState({persons: data})
            }
        })
    }

    render() {
        let addPersonComponent;
        if (this.state.addMorePersons) {
            addPersonComponent =
                <AddPerson persons={this.state.persons} onAddPerson={(person) => this.handleAddPerson(person)}/>;
        } else {
            addPersonComponent = undefined;
        }

        return (
            <div>
                <ol>
                    {this.state.persons.map((person) => <Person key={person.id} person={person}/>)}
                </ol>
                <div>
                    <button onClick={() => {
                       this.setState({addMorePersons: !this.state.addMorePersons})
                    }
                    }>Add more persons?
                    </button>
                    {addPersonComponent}
                </div>
            </div>
        )
    }
}

export default PersonsList;