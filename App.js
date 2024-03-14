import React from "react"
import  ReactDOM  from "react-dom/client";
import "./index.css"


const heading = React.createElement(
    "h1",
    {
      id: "title",
    },                  
    "Heading 1 from react parcel"
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);