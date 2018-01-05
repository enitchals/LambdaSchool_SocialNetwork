import React, { Component } from 'react';
import './Posts.css';
import {connect} from 'react-redux';
import {getPostDetails} from '../../actions';
import Comments from '../Comments/Comments';
import {Glyphicon,Button} from 'react-bootstrap'


class Posts extends Component{
    componentDidMount() {
        this.props.getPostDetails(this.props.postid);
    }

    render(){
        let posts = this.props.posts;
        console.log(posts)
        return (
            <div>
            {posts.map((post,i) => {
                return (
                    <div className='container'>
                    <div className='container__header'>
                        <img className='container__header__thumbnail' alt='' src={post.imagePath}/>
                        <h4>{post.author.name}</h4>
                    </div>
                    <div className='container__body'>
                        {post.imagePath? <img className='container__body__img' src={post.imagePath} /> : null }
                    <div className='container__body__textbox'>  
                        {post.text}
                    </div>
                    </div>
                    <Glyphicon 
                    glyph="heart"
                    onClick={this.addLike}
                    />
                    {post.comments.map((comment,i)=>{
                        return (
            
                            <div className='container__comments'>
                                {`${comment.author.name}: ${comment.text}`}
                            </div>
                        )
                    })}
                    <Comments />
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