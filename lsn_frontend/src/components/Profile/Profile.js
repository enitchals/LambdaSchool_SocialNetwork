import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Status from '../Status/Status'
import Posts from '../Posts/Posts'
import './Profile.css';
import {connect} from 'react-redux';
import {getUserDetails} from '../../actions'

class Profile extends Component {
    componentDidMount() {
        this.props.getUserDetails();
    }
    render() {
        let user = this.props.user
        return(
            <div className= 'ProfileBody'>
                <div className= 'ProfileInfo'>
                <div id='Profile__image'>
                </div>
                <div className='ProfileInfo__bodyitem'>
                Name:{user.name}
                </div>
                <div className='ProfileInfo__bodyitem'>
                Role:{user.name}
                </div>
                <div className='ProfileInfo__bodyitem'>
                Location:{user.location}
                </div>
                <div className='ProfileInfo__bodyitem'>
                Github:{user.name}
                </div>
                <div className='ProfileInfo__bodyitem'>
                Speciality:{user.specialty}
                </div>
                </div>
                <div className='Feed'>
                <div className='PostBox'>
                About Me: {user.name}
                </div>
                <Status />
                <Posts />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, { getUserDetails })(Profile);
