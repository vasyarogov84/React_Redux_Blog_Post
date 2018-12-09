import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost} from '../actions/index';
import { Link } from 'react-router-dom';


class PostShow extends Component {
  componentDidMount() {

    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  onClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    })
  }

  render() {
    
    const { post } = this.props;
   
    if (!post) {
      return <h2>Post Loading...</h2>
    }
    return (
      <div>
        <div style={{marginTop: 10}}>
          <div className="col-md-6">
            <Link to="/" className="btn btn-primary">Back</Link>
          </div>
          <div className="pull-xs-right ">
            <button className="btn btn-danger"
            onClick={this.onClick.bind(this)}
            >Delete</button>
          </div>
        </div>


        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  //console.log(Object.keys(posts).length);
  return { post: posts[ownProps.match.params.id] }
}



export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
