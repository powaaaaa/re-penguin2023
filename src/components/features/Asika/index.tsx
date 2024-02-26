import { FC } from "react";
import { ImageMappingType } from "../../../util/type";
import { Image } from "../../ui/Image";

type Props = {
  status: number;
};

const imageMappings: ImageMappingType[] = [
  { src: "/images/1.png", min: 0, max: 3 },
  { src: "/images/2.png", min: 4, max: 10 },
  { src: "/images/3.png", min: 11, max: 21 },
  { src: "/images/4.png", min: 22, max: 34 },
  { src: "/images/5.png", min: 35, max: 50 },
  { src: "/images/6.png", min: 51, max: 74 },
  { src: "/images/7.png", min: 75, max: 99 },
  { src: "/images/8.png", min: 100, max: Infinity },
];

export const Asika: FC<Props> = ({ status }) => {
  const imageToDisplay = imageMappings.find(
    (image) => status >= image.min && status <= image.max,
  );

  return (
    <>{imageToDisplay && <Image src={imageToDisplay.src} alt="アシカ" />}</>
  );
};
