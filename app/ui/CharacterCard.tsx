import FemaleIcon from "./Icons/FemaleIcon";
import MaleIcon from "~/app/ui/Icons/MaleIcon";

import {GENDERS} from "~/utils/constants";

export default function CharacterCard({name, gender, homeworld}) {
  const CurrentIcon = GENDERS.MALE === gender ? MaleIcon : FemaleIcon
  return (
    <div>
      <img src="" alt=""/>
      <div>
        <span>1</span>
        <span>2</span>
        <CurrentIcon styles="fill-red-500 h-16 w-16"/>
      </div>
    </div>
  )
}
