import React, { Component } from 'react';
import './Status.css';
import {connect} from 'react-redux';
import {addPostDetails} from '../../actions';

class Status extends Component{
    constructor(props){
        super(props);
        this.state = {
            newPost:{
                text:'',
                author:this.props.author
            }
        }
    }

    handleTextInput=(event) =>{
        this.setState({newPost:{
            text:event.target.value,
            author:this.props.author
        }});
    }

    addPostDetails = (event) => {
        event.preventDefault();
        this.props.addPostDetails(this.state.newPost);
        this.setState({
            newPost:{
                text:'',
                author:this.props.author
            }
        })
    }
   
    render(){
        return (
        <div>
                <input className='Postinput' type="text" placeholder="Add new post" onChange={this.handleTextInput} />
                <button onClick ={this.addPostDetails} > Submit </button>
            </div>
        )
    }
}



export default Status;
