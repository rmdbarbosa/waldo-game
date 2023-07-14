import React from "react";

function coord(e) {
  // e = Mouse click event.
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.
  console.log("X : " + x + " ; Y : " + y + ".");
}
export default function App() {
  return (
    <div className="background__container">
      <img
        id="clickme"
        className="background__img"
        src="/img.jpg"
        alt="waldo img"
        onClick={coord}
      />
    </div>
  );
}
