export const BackgroundCircle = ({ centerX, centerY, strokeWidth }) => {
  return (
    <circle
      cx={centerX}
      cy={centerY}
      r="200"
      fill="yellow"
      stroke="black"
      strokeWidth={strokeWidth}
    ></circle>
  );
};
