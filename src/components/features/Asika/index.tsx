import { FC } from "react";
import { ImageMappingType } from "../../../util/type";
import { Image } from "../../ui/Image";

type Props = {
  status: number;
};

const imageMappings: ImageMappingType[] = [
  { src: "/images/1.png", min: 0, max: 2 },
  { src: "/images/2.png", min: 3, max: 6 },
  { src: "/images/3.png", min: 7, max: 9 },
  { src: "/images/4.png", min: 10, max: 14 },
  { src: "/images/5.png", min: 15, max: 19 },
  { src: "/images/6.png", min: 20, max: 29 },
  { src: "/images/7.png", min: 30, max: 99 },
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
