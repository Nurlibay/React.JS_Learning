import React from 'react';
import PropTypes from 'prop-types';

class Lesson1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nurlibay",
            age: 20,
            job: "Android and FrontEnd Developer",
            date: new Date()
        };
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>My name is {this.state.name}</h1>
                <p>He is {this.state.age} years old</p>
                <h2>He is {this.state.job}</h2>
                <h1>It is {this.state.date.toLocaleDateString()}</h1>
            </div>
        );
    }
}

export default Lesson1;
