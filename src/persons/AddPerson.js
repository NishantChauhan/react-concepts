import React, {Component} from "react";

class AddPerson extends Component {
    initialState = {firstname: "", lastname: ""};

    constructor(props) {
        super(props);
        this.state = {...this.initialState};
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onAddButtonClick = this.onAddButtonClick.bind(this);
    }

    onAddButtonClick(e) {
        const addedPerson = {
            id: this.props.persons.length + 1,
            firstname: this.state.firstname,
            lastname: this.state.lastname
        };
        this.props.onAddPerson(addedPerson);
        this.setState({...this.initialState});
        e.preventDefault();
    }

    onFirstNameChange(e) {
        this.setState({firstname: e.target.value});
    }

    onLastNameChange(e) {
        this.setState({lastname: e.target.value});
    }
    render() {
        return (
            <form>
                <label> First Name
                    <input type="text" value={this.state.firstname}
                           onChange={this.onFirstNameChange}/>
                </label>
                <label> Last Name
                    <input type="text" value={this.state.lastname}
                           onChange={this.onLastNameChange}/>
                </label>
                <button onClick={this.onAddButtonClick}>Add</button>
            </form>
        );
    }
}

export default AddPerson;