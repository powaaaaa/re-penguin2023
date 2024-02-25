import { createElement } from "react";
import {
  FaRegFaceLaughSquint,
  FaRegFaceSmile,
  FaRegFaceFrown,
} from "react-icons/fa6";
import {
  LiaBatteryFullSolid,
  LiaBatteryThreeQuartersSolid,
  LiaBatteryHalfSolid,
} from "react-icons/lia";
import {
  MdOutlineRestaurant,
  MdEventAvailable,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
import { CategoryList } from "./type";

export const categoryList: CategoryList = {
  difficulty: [
    { name: "かんたん", icon: createElement(FaRegFaceLaughSquint) },
    { name: "ふつう", icon: createElement(FaRegFaceSmile) },
    { name: "むずかしい", icon: createElement(FaRegFaceFrown) },
  ],
  motivation: [
    { name: "ある！", icon: createElement(LiaBatteryFullSolid) },
    { name: "そこそこ", icon: createElement(LiaBatteryThreeQuartersSolid) },
    { name: "ない", icon: createElement(LiaBatteryHalfSolid) },
  ],
  category: [
    { name: "せいかつ", icon: createElement(MdOutlineRestaurant) },
    { name: "イベント", icon: createElement(MdEventAvailable) },
    { name: "アイデア", icon: createElement(MdOutlineTipsAndUpdates) },
  ],
};
