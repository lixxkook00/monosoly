import { Icon } from "./type";

const IcTimes: React.FC<Icon> = ({ color = '#848484' }) => {
  return <>
    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="15" cy="14.1223" rx="15" ry="14.1223" fill="#D9D9D9" fillOpacity="0.4"/>
      <path d="M8.6842 8.17603L20.921 19.6969" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M20.921 8.1759L8.68418 19.6968" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </>
}

export default IcTimes;