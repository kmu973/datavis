import "./App.css";
import { Face } from "./Face";

function App() {
  const width = 200;
  const height = 200;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;

  return (
    <div>
      <Face
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
      />
    </div>
  );
}

export default App;
