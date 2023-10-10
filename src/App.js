import { csv, csvParse } from "d3";
import "./App.css";
import { Face } from "./Face";
import React, { useState, useCallback } from "react";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;

const csvurl =
  "https://raw.githubusercontent.com/kmu973/datavis/master/data/css.csv?token=GHSAT0AAAAAACIRTD4TM6FMP633VBEILDQGZJFKIUA";

csv(csvurl).then((data) => {
  let message = "";
  message = message + data.length + "rows\n";
  message = message + data.columns.length + "columns\n";
  console.log(message);
});

// const fetchText = async (url) => {
//   const response = await fetch(url);
//   return await response.text();
// };

// fetchText(csvurl);

// fetchText(csvurl).then((text) => {
//   const data = csvParse(text);
//   console.log(data.length + " rows");
// });

const circleX = width / 2;
const circleY = height / 2;
const circleRadius = 10;
const initialMousePosition = { x: circleX, y: circleY };

function App() {
  const [mousePosition, setMousePosition] = useState(initialMousePosition);

  const handleMouseMove = useCallback(
    (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    },
    [setMousePosition]
  );

  return (
    <div>
      {/* <Face
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
        strokeWidth={strokeWidth}
      />
      <Face
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
        strokeWidth={strokeWidth}
      /> */}
      <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle cx={mousePosition.x} cy={mousePosition.y} r={circleRadius} />
      </svg>
    </div>
  );
}

export default App;
