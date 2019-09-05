// import React from 'react';

// import { render } from 'react-dom';

// // Import Components
// import Ap from '../src/component/Ap';
// import Single from './component/Single';
// import PhotoCard from './component/PhotoCard';

// // import react router deps
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect
// } from 'react-router-dom';
// import { Provider} from 'react-redux'
// import store, {history} from './pages/store'

// const router = (
//   <Provider store={store}>
//     <Router history={history}>
//         <Route exact path="/" component={Ap}></Route>
//         <Route  path="/" component={PhotoCard}></Route>
//         <Route path="/view/:postId" component={Single}></Route>  
//     </Router>
//   </Provider>
// )

// render(router, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkder from './serviceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorkder.unregister()
