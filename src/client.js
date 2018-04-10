import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import Routes from './components/Routes';
import createHistory from 'history/createBrowserHistory';
import DevTools from './components/DevTools';

const customHistory = createHistory();
const initialState = window.REDUX_INITIAL_STATE || {};
const store = configureStore(initialState);

const component = (
    <Provider store={store}>
        <Router history={customHistory}>
            <Routes/>
        </Router>
    </Provider>
);

ReactDOM.render(component, document.getElementById('react-view'));
ReactDOM.render(<DevTools store={store} />, document.getElementById('dev-tools'));