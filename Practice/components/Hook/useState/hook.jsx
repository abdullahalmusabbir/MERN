import React, { Component } from 'react';

export default class EventHookClasss extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increamentHandler = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return(
            <div className="text-center">
                <h1>hook1</h1>
                <h1>{this.state.count}</h1>
                <button className="btn btn-primary" onClick={this.increamentHandler}>increament</button>
            </div>
        )
    }
}