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
<<<<<<< HEAD
            <div className= 'ProfileBody'>
                <div className= 'ProfileInfo'>
                <img id = 'Profile__image' src={user.imagePath} />
                <div className='ProfileInfo__bodyitem'>
                { `Name: ${user.name}`}
                </div>
                <div className='ProfileInfo__bodyitem'>
                { `Role: ${user.role}`}
                </div>
                <div className='ProfileInfo__bodyitem'>
                { `Location: ${user.location}`}
                </div>
                <div className='ProfileInfo__bodyitem'>
                { `Github: ${user.gitHub}`}
                </div>
                <div className='ProfileInfo__bodyitem'>
                {`Speciality: ${user.specialty}`}
                </div>
                <div className='ProfileInfo__bodyitem'>
                {`About Me: ${user.aboutMe}`}
                </div>
                </div>
                <div className='Feed'>
                <Status />
                <Posts />
                </div>
                
            </div>
=======
            <div className='MainWrapper'>Profile Placeholder</div>
>>>>>>> 4987411af552baea92904f07505180dc27756680
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, { getUserDetails })(Profile);
