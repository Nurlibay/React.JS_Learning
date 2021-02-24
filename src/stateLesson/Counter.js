import React from 'react';
import './main.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return ( 
            <div className="main">
                <button className="btnMinus" onClick = {(e) => this.decrement(e)}>-</button>
                <button className="btnReset" onClick = {(e) => this.reset(e)}>Reset</button>
                <button className="btnPlus" onClick = {(e) => this.increment(e)}>+</button>
                <h1>Count: {this.state.count}</h1>
            </div>
        );
    }
}

export default Counter;
