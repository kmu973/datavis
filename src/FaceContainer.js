export const FaceContainer = ({ children, width, height }) => {
  return (
    <svg width={width} height={height}>
      {children}
    </svg>
  );
};
