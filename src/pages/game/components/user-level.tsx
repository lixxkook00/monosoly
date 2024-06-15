import '../styles/user-level.scss'
import { IcInfor } from "../../../icons";

const UserLevel : React.FC = () => {
  return <div className="user-level">
    <div className="mono-container">
      <div className="user-level-bar p-4 px-6 mb-2">
        <div className="flex align-center justify-between">
          <span className="text-sm font-light">
            Experience
          </span>

          <span className="text-sm font-light">
            Level <span className="font-semibold">4/10</span>
          </span>
        </div>

        <div className="user-level-process w-full h-6 mt-1 rounded-full">
          <div className="user-level-process-value h-full rounded-full" style={{width: '45%'}}></div>
        </div>
      </div>

      <div className="flex align-center justify-between">
        <div className="flex align-center justify-center flex-col">
          <span className="text-sm font-light">
            Up to level
          </span>
          <span className="font-semibold flex align-center justify-center">
            <span>+1</span> <img src="/images/lighting.png" alt="" className="w-3 ml-1" />
          </span>
        </div>

        <div className="flex align-center justify-between flex-col">
          <span className="text-sm font-light">
            Lợi nhuận mỗi giờ
          </span>
          <span className="font-semibold flex align-center justify-center">
            <img src="/images/gold-coin.png" alt="" className="w-6 mr-1" /> <span className='mr-1'>+1,2K</span> <IcInfor />
          </span>
        </div>
      </div>
    </div>
  </div>
}

export default UserLevel;