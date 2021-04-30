
import './ImageList.css';
import React from 'react';


class ImageCard extends React.Component{
constructor (props){

    super(props);
    this.state = {spans : 0};
    this.imageRef = React.createRef();    //creating react reference to manipulate DOM directly
}  

componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);  //load the image and only then pulling out the height
}

setSpans = () =>{
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);     // dividing the height of the image to the grid height to know the no. of grids to be used
   
    this.setState({spans});   //setting spans to new value
}
 
render(){
    
    const {description, urls} = this.props.image;
    return(
        <div style={{gridRowEnd: `span ${this.state.spans}`}}>
            <img ref={this.imageRef}     //the reference of the image
            alt= {description}
            src = {urls.regular}    
            />
        </div>
    )
}
}

export default ImageCard;