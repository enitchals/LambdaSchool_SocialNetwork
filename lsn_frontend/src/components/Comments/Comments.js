import React, { Component } from 'react';
import './Comments.css';
import {connect} from 'react-redux';
import {getCommentDetails} from '../../actions'


class Comments extends Component{
    componentDidMount() {
    }

    render(){
        return (
            <form onSubmit={this.addComment}>
                <input className='container__comment__input' type="text" placeholder="Enter new Comment" onChange={this.handleCommentInput} />
            </form> 
        )
    }
}

export default Comments;