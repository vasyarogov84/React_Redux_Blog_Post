import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listOfPosts } from '../actions/index';
import _ from 'lodash';


class PostIndex extends Component {
  componentDidMount() {
    this.props.listOfPosts();
  }
  renderList() {
   return  _.map(this.props.posts, (post,index) => {
      return (
        <li className="list-group-item" key={index}>
            {post.id}
        </li>
      );
    })
  }
  render() {
    if (!Object.keys(this.props.posts).length) {
       return <h2>Page Loading</h2>
    }
    return (
      <div>
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