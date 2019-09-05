import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Ap from './component/Ap'
import PhotoCard from './component/PhotoCard'
import Single from './component/Single'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Provider} from 'react-redux'
import store, {history} from './pages/store'

class App extends Component {

  render() {
    return(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Ap>
              <Route path="/PhotoCard" component={PhotoCard} />
              <Route path="/view/:postId" component={Single} />
            </Ap>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;




