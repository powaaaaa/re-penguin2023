import { FC } from "react";
import { Asika } from "../../../../features/Asika/Asika";

type Props = {
  status: number;
  className?: string;
};

export const AsikaContainer: FC<Props> = ({ status, className }) => {
  // relativeで消えちゃう
  return (
    <div className={`relative h-full rounded-lg overflow-hidden ${className}`}>
      <Asika status={status} />
      <img
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] max-w-none -z-10"
        src="images/asikaback3.png"
        alt="background"
      />
    </div>
  );
};
