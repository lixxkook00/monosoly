import { Icon } from "./type";

const IcArrow: React.FC<Icon> = ({ color = '#848484' }) => {
  return <>
    <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L13.5 13.5L1 26" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </>
}

export default IcArrow;