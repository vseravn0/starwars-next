import {IStyles} from "../../../types/main";

export default function MaleIcon({styles}: IStyles) {
  return (
    <svg className={styles} viewBox="0 0 60 60">
      <path
        d="M5.5 7C7.43 7 9 8.57 9 10.5S7.43 14 5.5 14 2 12.43
          2 10.5 3.57 7 5.5 7Zm0-2C2.46 5 0 7.46 0 10.5S2.46 16 5.5 16s5.5-2.46
          5.5-5.5c0-1.16-.36-2.23-.97-3.12L14 3.42V6h2V0h-6v2h2.58L8.61 5.97C7.73
          5.36 6.66 5 5.5 5Z"
      />
    </svg>
  )
}
