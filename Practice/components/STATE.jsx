import React, { Component } from 'react';

export default class STATE extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        const { count } = this.state;
        return (
            <div className="bg-gray-200 text-black text-center self-center">
                <h1>Count: {count}</h1>
                <button onClick={this.handleIncrement} className="bg-green-500 text-white px-4 py-2 rounded" disabled={count === 4 ? true : false}>+</button>
                <button onClick={this.handleDecrement} className="bg-red-500 text-white px-4 py-2 rounded" disabled={count === 0? true : false}>-</button>
            </div>
        );
    }
}

