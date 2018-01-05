import React, { Component } from 'react';
import './Status.css'

class Status extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <form onSubmit={this.addComment}>
                <input className='Postinput' type="text" placeholder="Add new post" onChange={this.handleCommentInput} />
            </form> 
        )
    }
}

export default Status;