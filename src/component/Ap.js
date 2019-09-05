import React,{component} from 'react'
import { bindActionCreators} from 'redux'
import {connect } from 'react-redux'
import * as actionCreators from '../action/actionCreators'
import Main from './Main'

/*把redux里的state放入props*/
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}
/*把所有action放入props*/
function mapDispachToProps(dispatch) {
  return bindActionCreators({...actionCreators},dispatch);
}

const Ap = connect(mapStateToProps, mapDispachToProps)(Main);

export default Ap;