import { BackgroundCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";
import { FaceContainer } from "./FaceContainer";

export const Face = ({ width, height, centerX, centerY, strokeWidth }) => {
  return (
    <FaceContainer width={width} height={height}>
      <BackgroundCircle
        centerX={centerX}
        centerY={centerY}
        strokeWidth={strokeWidth}
      />
      <Eyes centerX={centerX} centerY={centerY} />
      <Mouth centerX={centerX} centerY={centerY} />
    </FaceContainer>
  );
};
