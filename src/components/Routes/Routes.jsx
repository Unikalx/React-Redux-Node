import React, {Component} from 'react';
import Header from 'components/Header/index';
import App from 'components/App/index';
import Login from 'components/Login';
import CounterPage from 'components/CounterPage/index';
import TimePage from 'components/TimePage/index';
import {Route, Switch, Redirect, withRouter, Link} from 'react-router-dom';
import fakeAuth from 'redux/actions/fakeAuth.js';

class Routes extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AuthButton/>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path='/counters' component={CounterPage}/>
                    <PrivateRoute path='/time' component={TimePage}/>
                    <Route path='/login' component={Login}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

const AuthButton = withRouter(
    ({history}) =>
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome!{' '}
                <button
                    onClick={() => {
                        fakeAuth.signout(() => history.push('/'));
                    }}
                >
                    Sign out
                </button>
            </p>
        ) : (
            <Link to='/login'>You are not logged in.</Link>
        )
);
const NoMatch = ({location}) => (
    <div>
        <h3>
            No match for <code>{location.pathname}</code>
        </h3>
    </div>
);

export default Routes;
