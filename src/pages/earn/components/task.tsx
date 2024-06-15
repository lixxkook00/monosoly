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
    <div className="bg-[#282A2F] rounded-xl flex items-center gap-2 px-4 py-2 cursor-pointer">
      <div>
        <img className='w-24' src={`/images/${img}`} alt="" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-base font-normal">{title}</p>
        <div className="flex gap-2">
          <img src="/images/gold-coin.png" alt="coin" />
          <p className="text-base font-semibold">{formatAmount(amount)}</p>
        </div>
      </div>

      <IcCheck color={checked ? '#00FF1A' : '#ffffff'} />
    </div>
  );
};

export default Task;
