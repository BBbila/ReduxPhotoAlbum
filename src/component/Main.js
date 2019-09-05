import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import PhotoCard from './PhotoCard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Main.css';
import Single from './Single';



class Main extends Component {
  render() { 
    return(
        <div className="Wrap">
          <h1>
            <Link className="title" to="/PhotoCard">ReduxPhotoAlbum</Link>
          </h1>
          <Route path="/PhotoCard" component={PhotoCard} />
          <Route path="/view/:postId" component={Single} />
          {/* {React.cloneElement(<PhotoCard />,{...this.props}.children, {...this.props})} */}
        </div> 
    )
  }
}

export default Main;




