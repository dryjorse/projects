import { FC } from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

interface Props extends IContentLoaderProps {
  rounded?: number;
}

const Skeleton: FC<Props> = ({ rounded = 0, ...props }) => {
  return (
    <ContentLoader
      speed={2}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      viewBox={`0 0 ${props.width} ${props.height}`}
      {...props}
    >
      <rect
        x="0"
        y="0"
        rx={rounded}
        ry={rounded}
        width={props.width}
        height={props.height}
      ></rect>
    </ContentLoader>
  );
};

export default Skeleton;
