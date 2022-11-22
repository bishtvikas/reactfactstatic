import React from "react";

// 1- prop is destructured into simpler variables using {}
// 2- variable name must match the prop passed
function Card(props) {
   return (
    // <div className="outer--container">
      <div className="card--container">
        <div className="card--design">
          <img src={require(`./images/${props.element.img_pic}`)} alt="no data" className="card--image"/>
          <p className="card--rating">{props.element.img_rating}</p>
          <p className="card--title">{props.element.img_title}</p>
          <h3 className="card--price">
            From ${props.element.img_price} /{" "}
            <span className="card--quantity">person</span>
          </h3>
        </div>
      </div>
    // </div>
  );
}

export default Card;
