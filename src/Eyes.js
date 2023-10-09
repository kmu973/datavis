export const Eyes = ({ centerX, centerY }) => {
  return (
    <>
      <circle cx={centerX - 80} cy={centerY - 50} r="30" fill="black"></circle>
      <circle cx={centerX + 80} cy={centerY - 50} r="30" fill="black"></circle>
    </>
  );
};
