import React, { Component } from 'react';

export default class EventHandlerClasss extends Component {

    constructor(props) {
        super(props);
        this.state = {
            changeValue: ''
        };
    }

    handleOnChange = (event) => {
        this.setState(
            { changeValue: event.target.value }, () => {
                console.log(this.state.changeValue);
                }
        );
    }

    render() {
        return(
            <div>
                <h1>Event Handler Class</h1>
                <input type="text" onChange={this.handleOnChange} className="border-2 border-gray-300 p-2 rounded"/>
                <p>{this.state.changeValue}</p>
            </div>
        )
    }
}
