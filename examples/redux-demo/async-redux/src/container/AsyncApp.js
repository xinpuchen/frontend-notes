import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from '../action';
import Picker from '../component/Picker';
import Posts from '../component/Posts';

class AsyncApp extends React.Component{
  static propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }
  componentDidMount(){
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.selectedSubreddit !== this.props.selectedSubreddit){
      const { dispatch, selectedSubreddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }
  handleChange = nextSubreddit => {
    this.props.dispatch(selectSubreddit(nextSubreddit));
  }
  handleRefreshClick = e => {
    const { dispatch, selectedSubreddit } = this.props;
    e.preventDefault();
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }
  render(){
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <Picker value={selectedSubreddit} onChange={this.handleChange} options={['reactjs', 'frontend']} />
        <p>
          {lastUpdated && <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}{' '}</span>}
          {!isFetching && <span style={{color:'blue',cursor: 'pointer'}} onClick={this.handleRefreshClick}>Refresh</span>}
        </p>
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 && <div style={{opacity: isFetching?0.5:1}}><Posts posts={posts} /></div>}
      </div>
    )
  }
}

function mapStateToProps(state){
  const { selectedSubreddit, postsBySubreddit } = state;
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit] || { isFetching: true, items: [] };
  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AsyncApp);