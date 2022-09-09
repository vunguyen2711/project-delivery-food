import React from "react";

const Helmet = (props) => {
  document.title = "Food Ordering Apps -" + props.title;
  return <div>{props.children}</div>;
};

export default Helmet;
