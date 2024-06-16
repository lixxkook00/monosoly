import { useSelector } from "react-redux";
import { RootState } from "../../../contexts/store";
import { formatAmount } from "../../../utils";
import { useNavigate } from "react-router-dom";


const ProfileBar = () => {
  const { balance, userName } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="bg-black font-semibold p-6 rounded-2xl">
          <img src={`/images/x.png`} alt="" />
        </div>

        <p className="text-base text-black ml-2">{userName}</p>
      </div>

      <div className="flex items-center">
        <div className="bg-[#282A2F] rounded-full p-2 py-1.5 pl-3 mr-2 gap-2 flex items-center cursor-pointer">
          <p className="text-sm">{formatAmount(balance)}</p>
          <img className="w-5" src="/images/gold-coin.png" alt="" />
        </div>

        <div onClick={() => navigate('/settings')} className="bg-[#282A2F] rounded-full flex justify-center items-center py-1.5 px-3 h-full cursor-pointer" style={{ height: '32.8px' }}>
          <img className="w-6" src="/images/ic-setting.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
