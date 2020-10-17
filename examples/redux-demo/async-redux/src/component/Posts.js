import React from 'react';
import PropTypes from 'prop-types';

export default class Posts extends React.Component{
  static propTypes = {
    posts: PropTypes.array.isRequired
  }
  render(){
    const { posts } = this.props;
    return <ul>{posts.map((post, i) => <li key={i}>{post.title}</li>)}</ul>;
  }
}