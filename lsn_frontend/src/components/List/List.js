import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './List.css';

const testListItem = { /* Comment this declaration out when backend is reachable, for testing purposes only */
    name: 'Test Test',
    email: 'testemail@testemail.io',
    cohort: 'CS1-TEST',
    role: 'RoleTest',
    imagePath: 'https://i.imgur.com/gKMqPjv.png',
}

class ListItem extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Test Test',
            email: 'testemail@testemail.io',
            cohort: 'CS1-TEST',
            role: 'RoleTest',
            imagePath: 'https://i.imgur.com/gKMqPjv.png',
        }
    }

    componentDidMount() {
            this.setState({
                name: this.props.data.name, 
                email: this.props.data.email,
                cohort: this.props.data.cohort,
                role: this.props.data.role,
                imagePath: this.props.data.imagePath,
            });
    }
    render() {
        return(
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
        axios.get('URL/users').then((response) =>{
            this.setState({memberList: response}); // Set the list of members in a property called memberList on List's state.
            console.log('The list of members from server is: ',response);
        });
    }

    render() {
        return(
            <div className='MainWrapper'>
                <div className='MembersList'>
                    <h1>List of Members</h1>
                    <ListItem data={testListItem} /> {/* Comment this line out when backend is reachable, for testing purposes only */}
                    <ListItem data={testListItem} /> {/* Comment this line out when backend is reachable, for testing purposes only */}
                    <ListItem data={testListItem} /> {/* Comment this line out when backend is reachable, for testing purposes only */}
                    <ListItem data={testListItem} /> {/* Comment this line out when backend is reachable, for testing purposes only */}
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