import {IStyles} from "../../../types/main";

export default function FemaleIcon({styles}: IStyles) {
  return (
    <svg className={styles} viewBox="0 0 60 60">
      <path
        d="M11.5 6C11.5 2.96 9.04.5 6 .5S.5 2.96.5 6c0 2.7
         1.94 4.93 4.5 5.4v2.1H3v2h2v2h2v-2h2v-2H7v-2.1c2.56-.47
          4.5-2.7 4.5-5.4Zm-9 0c0-1.93 1.57-3.5 3.5-3.5S9.5
          4.07 9.5 6 7.93 9.5 6 9.5 2.5 7.93 2.5 6Z"
      />
    </svg>
  )
}
