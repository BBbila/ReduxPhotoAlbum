import React,{Component,Fragment} from 'react';
import { connect } from 'react-redux';
import increment from '../action/actionCreators';
import './photo.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Photo extends Component {

  // <figure> 标签规定独立的流内容（图像、图表、照片、代码等等）。
  render() {
    const {increment , posts, comments } = this.props;
    return(
     <Fragment>
        <div className="photoWrap">
          {posts.map((item, index) => 
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
          )}
        </div>
      </Fragment>  
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
)(Photo);