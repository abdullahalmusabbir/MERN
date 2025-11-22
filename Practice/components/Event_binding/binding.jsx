import React, {Component} from "react";

export default class EventBinding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (){
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Event Binding</h1>
                <h1 className="text-2xl font-bold text-center my-4">{this.state.count}</h1>
                <button onClick={this.handleClick.bind(this)}>Increase</button>
            </div>
        );
    }
}