import React, {Component} from "react";
import {UserContext} from "./UserContext";
import {Container, Divider, Header, List} from "semantic-ui-react";

class UpdateLog extends Component {
    static contextType = UserContext;

    render() {
        return (
            <Container>
                <Divider/>
                <Header as='h3'>Update Log</Header>
                <List ordered>
                {
                    this.props.updateLog.map((log, index) => {
                            const userLog = 'Date: ' + log.date.toLocaleString() +' User: ' + this.context + '.' ;
                            return (<List.Item key={index}> {log.log}<br/><small>{userLog}</small>   </List.Item>);
                        }
                    )
                }
                </List>
            </Container>

        );
    }
}

export default UpdateLog;