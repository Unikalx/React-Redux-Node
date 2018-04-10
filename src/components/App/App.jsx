import React, {Component, PropTypes} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import './bootstrap.css';
import HelloWorldPage from 'components/HelloWorldPage';

const propTypes = {
    children: PropTypes.node
};

class App extends Component {
    render() {
        return (
            <div>
                <Grid>
                    {this.props.children}
                </Grid>
                <HelloWorldPage/>
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;
