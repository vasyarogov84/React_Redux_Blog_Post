import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { listOfPosts } from '../actions/index';
import _ from 'lodash';


class PostIndex extends Component {
  componentDidMount() {
    this.props.listOfPosts();
  }
  renderList() {
    return _.map(this.props.posts, (post, index) => {
      let linkTo = `/posts/${post.id}`;
      return (
        
          <li className="list-group-item" key={index}>
           <Link to={linkTo}><p>{post.title}</p></Link> 
          </li>
        
      );
    })
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new" >
            Add a Post
             </Link>
        </div>
        <h2>List of Posts</h2>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { listOfPosts })(PostIndex);