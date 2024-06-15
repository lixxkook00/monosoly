interface CardProps {
  img: string;
  title: string;
  subtitle: string;
  amount: number;
  energy: number;
  total: number;
  level: number;
}

const Card = ({ img, title, subtitle, amount, energy, total, level }: CardProps) => {
  return (
    <div
      className="flex flex-col bg-[#282A2F] rounded-xl items-center py-4"
      style={{ width: 'max-content' }}>
      <div className="flex items-center gap-2 px-4 border-b-[#686A6D] border-b-2 pb-2">
        <div className="flex items-center bg-[#848484] p-12 rounded-2xl">
          <img src={`/images/${img}`} alt="" />
        </div>

        <div className="flex flex-col gap-1">
          <div>
            <p className="text-base">{title}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-[#686A6D]">{subtitle}</p>
            <div className="flex items-center gap-1">
              <p className="text-sm">{`+${amount}`}</p>
              <img className="scale-75" src="/images/gold-coin.png" alt="" />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm">{`+${energy}`}</p>
              <img className="scale-75" src="/images/lighting.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full pt-2 px-4">
        <p className="text-center text-xl flex-1 pt-2">Lv {level}</p>
        <div className="flex flex-[2] gap-1 border-l-[#686A6D] border-l-2 pt-2 pl-2">
          <p className="text-xl">{total}</p>
          <img src="/images/gold-coin.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
