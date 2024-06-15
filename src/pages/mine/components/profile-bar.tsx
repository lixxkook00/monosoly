interface ProfileBarProps {
  img: string;
  name: string;
  balance: number | string;
}

const ProfileBar = ({ img, name, balance }: ProfileBarProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="bg-black font-semibold p-6 rounded-2xl">
          <img src={`/images/${img}`} alt="" />
        </div>

        <p className="text-base text-black ml-2">{name}</p>
      </div>

      <div className="flex items-center">
        <div className="bg-[#282A2F] rounded-full p-2 py-1.5 mr-2 gap-2 flex items-center cursor-pointer">
          <p className="text-sm">{balance}</p>
          <img className="w-5" src="/images/gold-coin.png" alt="" />
        </div>

        <div className="bg-[#282A2F] rounded-full flex justify-center items-center py-1.5 px-3 h-full cursor-pointer" style={{ height: '32.8px' }}>
          <img className="w-6" src="/images/ic-setting.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
