import React, {Component} from "react";
import {FormButton, Form, Divider} from "semantic-ui-react";
class AddPerson extends Component {
    initialState = {firstname: "", lastname: ""};
    constructor(props) {
        super(props);
        this.state = {...this.initialState};

        /**
         * We have to bind class method to this so that when html elements are clicked
         * They must refer to the correct this method.
         * */
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
    /**
     * Here we are using controlled components to control the state of the AddPerson Component
     * This means that the only one source of truth will be the Component State.
     * */
    render() {
        return (
            <Form>
                <Divider/>
                <Form.Input fluid label='First Name' placeholder='First Name' value={this.state.firstname}
                            onChange={this.onFirstNameChange}>
                </Form.Input>
                <Form.Input fluid label='First Name' placeholder='Last Name' value={this.state.lastname}
                            onChange={this.onLastNameChange}>
                </Form.Input>
                <FormButton onClick={this.onAddButtonClick} content={'Add'}/>
            </Form>
        );
    }
}
export default AddPerson;