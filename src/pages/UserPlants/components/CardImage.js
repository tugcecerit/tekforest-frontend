const CardImage = (props) => {
    if (props.image) {
        return <img src={props.image} className="pure-img"/>
    } else {
        return <img src={props.defaultImage} className="pure-img"/>
    }
    
}

export default CardImage;