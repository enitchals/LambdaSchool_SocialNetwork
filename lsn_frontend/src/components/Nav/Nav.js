import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            searchWord: 'search...'
        }
    }
    handleClick = (evt) => {
        this.setState({searchWord: ''});
    }

    handleReturn = (evt) => {
        if (evt.charCode === 13) {
            this.setState({searchTerm: evt.target.value, searchWord: ''});
            console.log('search term is now: ', this.state.searchWord);
        }
    }

    handleChange = (evt) => {
        this.setState({searchWord: evt.target.value});
    }

    handleSubmit = (evt) => {
        const search = evt.target.value;
        this.setState({searchWord: search, searchWord: ''});
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className='Nav noselect'>
                <div className='NavWrap'>
                    <div className='LeftNav'>
                        <NavLink className='NavHome' to='/'><img src='/img/Lambda_Social_White.png'/></NavLink>
                        <input type='text' value={this.state.searchWord} className='NavSearch' onClick={this.handleClick} onKeyPress={this.handleReturn} onChange={this.handleChange}/>
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