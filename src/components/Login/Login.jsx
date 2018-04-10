import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import fakeAuth from 'redux/actions/fakeAuth'


class Login extends Component {
    state = {
        redirectToReferrer: false
    };

    handleClick = () => {
        fakeAuth.authenticate(() => {
            this.setState({redirectToReferrer: true});
        });
    };

    render() {
        const {redirectToReferrer} = this.state;
        if (redirectToReferrer) {
            return <Redirect to={'/'}/>;
        }
        return (
            <div>
                <p>You must log in to view this page</p>
                <button onClick={this.handleClick}>Log in</button>
            </div>
        );
    }
}

export default Login;

