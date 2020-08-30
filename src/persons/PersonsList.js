import React, {Component} from "react";
import Person from "./Person";
import AddPerson from "./AddPerson.js";
import {UserContext} from "./UserContext.js";
import UpdateLog from "./UpdateLog";

class PersonsList extends Component {
    baseURL = 'http://localhost:6100/';
    state = {persons: [], addMorePersons: false, updateLogs: [{log: 'App Initialized. ', date: new Date()}]}
    currentUser = 'Nishant';

    handleAddPerson(person) {
        /**
         * Use Fetch API to update state only when no error is present
         * */
        fetch(this.baseURL + '/person', {
            method: 'POST', body: JSON.stringify(person),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        }).then(response => response.json()).then(data => {
            if (!data.error) {
                this.setState({
                    persons: this.state.persons.concat(data),
                    addMorePersons: false,
                    updateLogs: this.state.updateLogs.concat(
                        {
                            log: data.firstname + ' was added. ',
                            date: new Date()
                        })
                })
            }
        }).catch((err) => this.setState(
            {
                updateLogs: this.state.updateLogs.concat({
                    log: 'App was unable to add "' + person.firstname + '". ',
                    date: new Date()
                })
            }
        ));
    }

    componentDidMount() {
        this.fetchPersons()
        setInterval(()=>this.fetchPersons(),1000);
    }

    fetchPersons() {
        fetch(this.baseURL + '/persons').then(response => response.json()).then(data => {
            this.setState(
                {
                    persons: data
                }
            )
        }).catch((err) => this.setState(
            {updateLogs: this.state.updateLogs.concat({log: 'App was unable to load persons.', date: new Date()})}
        ))
    }

    render() {
        /**
         * Conditional rendering for Add Person only on button click
         * */
        let addPersonComponent;
        if (this.state.addMorePersons) {
            addPersonComponent =
                <AddPerson persons={this.state.persons} onAddPerson={(person) => this.handleAddPerson(person)}/>;
        } else {
            addPersonComponent = undefined;
        }
        /**
         * Key property is needed by React to identify the list items
         * */
        return (
            <UserContext.Provider value={this.currentUser}>
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
                <UpdateLog updateLog={this.state.updateLogs}/>
            </UserContext.Provider>
        )
    }
}

export default PersonsList;