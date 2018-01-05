import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './List.css';

const serverURL = 'http://471e2504.ngrok.io';

class ListItem extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: 'Test Test',
            email: 'testemail@testemail.io',
            cohort: 'CS1-TEST',
            role: 'RoleTest',
            imagePath: 'https://i.imgur.com/gKMqPjv.png',
        }
    }

    componentDidMount() {
            this.setState({
                id: this.props.data._id,
                name: this.props.data.name, 
                email: this.props.data.email,
                cohort: this.props.data.cohort,
                role: this.props.data.role,
                imagePath: this.props.data.imagePath,
            });
    }
    render() {
        return(
            <Link to={`/profile/${this.state.id}`}>
            <div className='ListItem'>
                <div className='ListItem__Component'>
                    <img className='ListItem__Image' src={this.state.imagePath}/>
                </div>
                <div div className='ListItem__Component'>
                    Cohort: {this.state.cohort}
                </div>
                <div div className='ListItem__Component'>
                    Name: {this.state.name}
                </div>
                <div div className='ListItem__Component'>
                    Role: {this.state.role}
                </div>
                
            </div>
            </Link>
        );
    }
}

class List extends Component {
    constructor() {
        super();
        this.state = {
            memberList: [],
        }
    }

    componentDidMount() {
        axios.get('http://471e2504.ngrok.io/users').then((response) =>{
            this.setState({memberList: response.data}); // Set the list of members in a property called memberList on List's state.
        });
    }

    render() {
        return(
            <div className='MainWrapper'>
                <div className='MembersList'>
                    <h1>List of Members</h1>
                    {this.state.memberList.map((item, index)=>{ // Map through each item in the members list and create a new row for the list.
                        return (
                            <ListItem key={index} data={item} id={index}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default List;