import { arc } from "d3";

export const Mouth = ({ centerX, centerY }) => {
  const mouthArc = arc()
    .innerRadius(135)
    .outerRadius(150)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 1.5);
  return (
    <path d={mouthArc()} transform={`translate(${centerX}, ${centerY})`} />
  );
};
