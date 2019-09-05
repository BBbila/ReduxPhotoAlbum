import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux'
import createHistory from './history'

import rootReduce from '../reducers/index'
import comments from '../data/comments';
import posts from '../data/posts';

const defaultState = {
  posts,
  comments
};

const store = createStore(rootReduce,defaultState);
export const history =  syncHistoryWithStore(createHistory,store);


export default store;
