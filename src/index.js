import React from "react";
import ReactDOM from "react-dom";
/* Componenets */
import News from "./components/news.jsx";
/* Data file (JSON) */
import datas from "./datas.json";
/* Style file */
import "./styles.css";

const populate = datas.map(data => {
  return <News d={data} />;
});

const main = (
  <div className="container">
    <div className="row">{populate}</div>
  </div>
);

ReactDOM.render(main, document.getElementById("root"));
