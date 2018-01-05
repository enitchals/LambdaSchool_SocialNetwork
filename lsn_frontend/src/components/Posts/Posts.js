import React, { Component } from 'react';
import './Posts.css';
import {connect} from 'react-redux';
import {getPostDetails} from '../../actions'

class Posts extends Component{
    componentDidMount() {
        this.props.getPostDetails();
    }

    render(){
        let posts = this.props.posts;
        return (
            <div>
            {posts.map((post,i) => {
                return (
                    <div className='PostBox'>
                    </div>
                )
            })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps, { getPostDetails })(Posts);