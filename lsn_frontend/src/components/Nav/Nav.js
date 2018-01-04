import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className='Nav'>
                <div className='NavWrap'>
                    <div className='LeftNav'>
                        <NavLink className='NavHome' to='/profile'><img src='/img/Lambda_Social.png'/></NavLink>
                        <input type='text' placeholder='search...' className='NavSearch'/>
                        <NavLink className='NavLink' activeClassName='NavLink--selected' to='/profile'>Profile</NavLink>
                        <NavLink className='NavLink' activeClassName='NavLink--selected' to='/list'>Members</NavLink>
                    </div>
                    <div className='RightNav'>
                        <NavLink className='NavLink' activeClassName='NavLink--selected' to='/'>Login</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;