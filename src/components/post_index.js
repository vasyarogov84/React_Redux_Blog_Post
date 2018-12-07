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
      let linkTo = `/posts/${post.id}`
      return (
        <Link to={linkTo} key={index}>
          <li className="list-group-item" >
            <p>{post.title}</p>
            <p>{post.categories}</p>
            <p>{post.content}</p>
          </li>
        </Link>
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