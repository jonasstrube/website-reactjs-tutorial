import React from "react";

const getNextIndex = (images, currentIndex) => {
    const newIndex = currentIndex + 1;
    if (newIndex >= images.length){
        return 0;
    }
    return newIndex;
}

export class ImageChanger extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imageIndex: 0
        };

    }
    
    componentDidMount(){
        this.intervalId = setInterval(
            () => {
                this.changeImage();
            },
            this.props.interval
        )
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    changeImage(){
        this.setState((state, props) => {
            return {
                imageIndex: getNextIndex(this.props.images, state.imageIndex)
            }
        });
    }

    render(){
        const currentImage = this.props.images[this.state.imageIndex];
        return(
            <img src={ currentImage.src } alt={ currentImage.alt }></img>
        );
    }
}