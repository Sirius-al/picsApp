import React from 'react'

import './ImageLists.css'

import ImageCard from './ImageCard'


class ImageLists extends React.Component{
    constructor(props) {
        super(props)
    }
    
    
    render() {
        const images = this.props.images.map(image => {
           return <ImageCard key={image.id} image={image}/> 
        })

        // console.log(this.props.images)
        return (
            <div className="image-items">
               {images}
            </div>
        );
    }
};

export default ImageLists


