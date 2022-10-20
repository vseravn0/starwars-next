import BaseIcon from "~/app/ui/Icons/BaseIcon";

import {GENDERS, ICONS_PATH} from "~/utils/constants";

export default function CharacterCard({name, gender, homeworld}) {
  const CurrentIcon = GENDERS.MALE === gender ? ICONS_PATH.MALE : ICONS_PATH.FEMALE
  return (
    <div className="grid grid-cols-1 grid-rows-6 bg-darkpurple border-solid border-2 border-lightborder w-72 h-96">
      <img src="" alt="" className="row-span-5"/>
      <div className="grid grid-cols-3 content-center border-solid border-2 border-red-500 row-span-1">
        <BaseIcon iconPath={ICONS_PATH.HEART}/>
        <p>{'testtes'}</p>
        <BaseIcon iconPath={CurrentIcon}/>
      </div>
    </div>
  )
}
