import React,{Component,Fragment} from 'react';
import './PhotoCard.css'
import Photo from './Photo'

class PhotoCard extends Component {

  render() {
    return(
      <Fragment>
        <div className="PhotoCardWrap">
          <Photo></Photo>
          {/* {this.props.posts.map((item, index) => <Photo {...this.props} key={index} index={index} item={item}></Photo>)}   */}
        </div>
      </Fragment>
    )
  }
}

export default PhotoCard;

