import React,{Component} from 'react';
import {connect} from 'react-redux'
import increment from '../action/actionCreators';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Photo from './Photo'
import './photo.css'

class Single extends Component {

  render() {
    const {increment, posts , comments, match:{params:{ postId, }}} = this.props;
    const index = posts.findIndex((item) => item.code === postId);
    const item = posts[index];
    console.log(index,item)
    return(
      <Router>
        <div className="SingleWrap">
          <div className="photoBanner" key={index} index={index}> 
            <div className="photoImg">
              <img src={item.displayUrl} alt={item.caption}></img>
            </div>
            <div className="photoNameCon">
              <Link className="photoName" to={`/view/${item.code}`}>{item.caption}</Link>
            </div>

            <div className="thoughtBanner">
              <div className="thoughtlikes"> 
                <button onClick={() => {increment(index)}} className="likesButton">♥{item.likes}</button>    
              </div>
              <Link className="Linkcomments" to={`/view/${item.code}`}>
                <div className="thoughtcomments">
                  <button className="commentsButton">🎤{comments[item.code] ? comments[item.code].length : 0}</button>    
                </div>
              </Link>
            </div>  
          </div>
          <div>
            1111
          </div>          
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

export default connect(
  mapStateToProps,
  {increment}
)(Single);

