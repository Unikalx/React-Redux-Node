import React, {Component} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import {Link} from 'react-router-dom';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import fakeAuth from 'redux/actions/fakeAuth.js';

console.log(fakeAuth.isAuthenticated);

class Header extends Component {
    render() {
        const timeHtml = (fakeAuth.isAuthenticated === true) ?
            <LinkContainer to='/time'><NavItem>Время</NavItem></LinkContainer> : '';
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Hello World</Link>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Link to='/test'>test</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav navbar>
                            {timeHtml}
                            <LinkContainer to='/counters'>
                                <NavItem>Счетчики</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
