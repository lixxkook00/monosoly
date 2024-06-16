import { useDispatch } from "react-redux";
import { show } from "../../../contexts/modal-slice";

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
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(show('packageModal'))}
      className="flex flex-col bg-[#282A2F] rounded-xl items-center p-2 w-full">
      <div className="flex items-start border-b-[#686A6D] border-b-2 pb-1 w-full">
        <div className="flex items-center rounded-2xl overflow-hidden w-1/3 min-w-16">
          <img src={`/images/${img}`} alt="" />
        </div>

        <div className="flex flex-col gap-1 ml-2">
          <div>
            <p className="text-sm">{title}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-[#686A6D]">{subtitle}</p>
            <div className="flex items-center gap-1">
              <p className="text-sm">{`+${amount}`}</p>
              <img className="w-3" src="/images/gold-coin.png" alt="" />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm">{`+${energy}`}</p>
              <img className="w-2" src="/images/lighting.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full pt-2">
        <p className="text-center text-base w-1/3 min-w-16">Lv {level}</p>
        <div className="flex flex-[2] gap-1 border-l-[#686A6D] border-l-2 pl-2">
          <p className="text-base">{total}</p>
          <img className="w-4 h-auto object-contain" src="/images/gold-coin.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
