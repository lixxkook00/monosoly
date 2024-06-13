import { Icon } from "./type";

const IcCheck: React.FC<Icon> = ({ color = '#ffffff' }) => {
  return <>
  <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8429 0.44053C30.6035 1.08913 30.6818 2.21719 30.0178 2.96013L10.866 24.3887C10.5188 24.7771 10.0167 25 9.48885 25C8.96097 25 8.45886 24.7771 8.11169 24.3887L0.450992 15.8173C-0.213007 15.0743 -0.134712 13.9463 0.62587 13.2977C1.38645 12.6491 2.5413 12.7255 3.2053 13.4685L9.48885 20.499L27.2634 0.61135C27.9274 -0.131587 29.0823 -0.208066 29.8429 0.44053Z" fill={color} />
  </svg>
  </>
}

export default IcCheck;