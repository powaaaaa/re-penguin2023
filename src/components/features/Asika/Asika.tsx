import { FC } from "react";
import { ImageMappingType } from "../../../util/type";
import { Image } from "../../ui/Image/Image";

type Props = {
  status: number;
};

const imageMappings: ImageMappingType[] = [
  { src: "/images/zp1.png", min: 0, max: 2 },
  { src: "/images/kp1.png", min: 3, max: 6 },
  { src: "/images/km1.png", min: 7, max: 9 },
  { src: "/images/ap1.png", min: 10, max: 14 },
  { src: "/images/default.png", min: 15, max: 19 },
  { src: "/images/am1.png", min: 20, max: 29 },
  { src: "/images/zm1.png", min: 30, max: 99 },
  { src: "/images/over.png", min: 100, max: Infinity },
];

export const Asika: FC<Props> = ({ status }) => {
  const imageToDisplay = imageMappings.find(
    (image) => status >= image.min && status <= image.max,
  );

  return (
    <>{imageToDisplay && <Image src={imageToDisplay.src} alt="アシカ" />}</>
  );
};
