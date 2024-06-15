import { IcCheck } from '../../../icons';

export interface TaskProps {
  amount: number;
  title: string;
  img: string;
  checked: boolean;
}

const Task = ({ amount, title, img, checked }: TaskProps) => {
  const formatAmount = (amount: number) => {
    return '+ ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <div className="bg-[#282A2F] rounded-xl flex items-center gap-4 px-6 py-2 cursor-pointer">
      <div>
        <img src={`/images/${img}`} alt="" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-lg">{title}</p>
        <div className="flex gap-2">
          <img src="/images/gold-coin.png" alt="coin" />
          <p className="text-xl">{formatAmount(amount)}</p>
        </div>
      </div>

      {checked ? (
        <div>
          <IcCheck />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Task;
