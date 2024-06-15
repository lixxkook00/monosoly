interface ProfileBarProps {
  img: string;
  name: string;
  balance: number | string;
}

const ProfileBar = ({ img, name, balance }: ProfileBarProps) => {
  return (
    <div className="flex items-center gap-5">
      <div className="bg-white p-10 rounded-2xl">
        <img src={`/images/${img}`} alt="" />
      </div>

      <div className="w-full">
        <p className="text-xl">{name}</p>
      </div>

      <div className="bg-[#282A2F] rounded-full pl-4 pr-9 py-2 gap-2 flex items-center cursor-pointer">
        <p className="text-base">{balance}</p>
        <img src="/images/gold-coin.png" alt="" />
      </div>

      <div className="bg-[#282A2F] rounded-full px-5 py-2 cursor-pointer">
        <p className="text-xl">...</p>
      </div>
    </div>
  );
};

export default ProfileBar;
