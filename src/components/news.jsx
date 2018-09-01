import React, { Component } from "react";
import "../styles.css";

class News extends Component {
  render() {
    /* Distructuring props */
    const { img, title, desc } = this.props.d;
    return (
      <div className="col-sm-6">
        <div className="each-cont">
          <div className="text-center">
            <img className="img-fluid img-thumbnail" src={img} alt="" />
          </div>
          <h3 className="title">{title}</h3>
          <p className="desc">{desc}</p>
        </div>
      </div>
    );
  }
}

export default News;
