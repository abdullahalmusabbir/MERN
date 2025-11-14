import React, {Component} from 'react';
import Loginpage from './loginpage.jsx';
import Homepage from './homepage.jsx';

export default class Log extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    render() {

        const { isLoggedIn } = this.state;
        let element = isLoggedIn ? <Homepage /> : <Loginpage />;

        return (
            <div>
                {element}
            </div>
        );
    }
}
