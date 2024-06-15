import { Icon } from "./type";

const IcInfor: React.FC<Icon> = ({ color = '#848484' }) => {
  return <>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill={color}/>
      <path d="M9.93023 5C10.3155 5 10.6279 5.31236 10.6279 5.69767V11.2791C10.6279 11.6644 10.3155 11.9767 9.93023 11.9767C9.54492 11.9767 9.23256 11.6644 9.23256 11.2791V5.69767C9.23256 5.31236 9.54492 5 9.93023 5Z" fill="white"/>
      <path d="M9.93023 15C10.444 15 10.8605 14.5835 10.8605 14.0698C10.8605 13.556 10.444 13.1395 9.93023 13.1395C9.41648 13.1395 9 13.556 9 14.0698C9 14.5835 9.41648 15 9.93023 15Z" fill="white"/>
    </svg>
  </>
}

export default IcInfor;