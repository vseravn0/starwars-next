import {IIconStyles} from "~/types/main";

export default function BaseIcon({iconStyles,iconViewBox,iconPath}: IIconStyles) {
  return (
    <svg className={iconStyles} viewBox={iconViewBox}>
      <path d={iconPath}/>
    </svg>
  )
}

BaseIcon.defaultProps = {iconStyles:"fill-black-500 flex h-12 w-12"}
