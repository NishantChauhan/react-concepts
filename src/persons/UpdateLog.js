import React, {Component} from "react";
import {UserContext} from "./UserContext";

class UpdateLog extends Component {
    static contextType = UserContext;

    render() {
        return (
            <div>
                <p>Update Log</p>
                <ol>
                {
                    this.props.updateLog.map((log, index) => {
                            const userLog = 'Date: ' + log.date.toLocaleString() +' User: ' + this.context + '.' ;
                            return (<li key={index}> {log.log}<br/><small>{userLog}</small>   </li>);
                        }
                    )
                }
                </ol>
            </div>

        );
    }
}

export default UpdateLog;