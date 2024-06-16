import { Background, MoveTransition } from '../../components';
import { TaskList } from './components';
import { useSelector } from 'react-redux';
import { RootState } from '../../contexts/store';
import { formatAmount } from '../../utils';

const Account = () => {
  const balance = useSelector((state: RootState) => state.user.balance);

  const dailyTitle = 'Nhiệm vụ hàng ngày';
  const dailyTask = [
    { id: 1, decs: '7/7 có sẵn', title: 'Full energy', img: 'gold-coin-large.png' },
    { id: 2, decs: 'Sắp ra mắt', title: 'Turbo', img: 'rocket.png' },
  ];
  const generalTask = [
    { id: 1, decs: '5 lvl', title: 'Thời gian hồi', img: 'lighting-large.png' },
    { id: 2, decs: '5 lvl', title: 'Energy limit', img: 'lighting-large.png' },
  ];

  return (
    <>
      <Background />
      
      <div className="absolute w-full h-full backdrop-blur-3xl px-2 pt-2 pb-[32%] overflow-y-scroll">

        <MoveTransition y="10vh">
          <div className="text-base text-center mb-2">
            Số dư của bạn
          </div>
          <section className="flex justify-center items-center gap-1">
            <img className='w-16' src="/images/token.png" alt="token" />
            <p className="text-center text-3xl font-semibold">{formatAmount(balance)}</p>
          </section>
          <div className="text-base text-center mt-4 text-[#F9B821]">
            Nhiệm vụ hàng ngày
          </div>
        </MoveTransition>

        <MoveTransition y="30vh">  
          <section className="w-full flex flex-col gap-2">
            <TaskList title={dailyTitle} items={dailyTask} />
          </section>
        </MoveTransition>

        <MoveTransition y="50vh">
          <div className="mt-4">
            <p className="text-lg">Bộ tăng cường</p>
          </div>
          <section className="w-full flex flex-col gap-2 pt-2">
            <div className="bg-[#282A2F] rounded-xl flex items-center gap-2 px-4 py-2 cursor-pointer">
              <div className="w-20 flex justify-center mr-2">
                <img className='object-contain' src={`/images/lighting-large.png`} alt="" />
              </div>
              <div className="flex flex-col w-full">
                <p className="text-sm font-normal">Thời gian hồi</p>
                <div className="flex items-center gap-2">
                  <img className='object-contain w-5' src={`/images/gold-coin.png`} alt="" />
                  <p className="text-base font-semibold">16K</p>
                  <p className="text-sm text-[#5E5F61]">• 5 lvl</p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full flex flex-col gap-2 pt-2">
            <div className="bg-[#282A2F] rounded-xl flex items-center gap-2 px-4 py-2 cursor-pointer">
              <div className="w-20 flex justify-center mr-2">
                <img className='object-contain' src={`/images/lighting-large.png`} alt="" />
              </div>
              <div className="flex flex-col w-full">
                <p className="text-sm font-normal">Energy limit</p>
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold w-14">+4</p>
                  <p className="text-sm text-[#5E5F61]">• 5 lvl</p>
                </div>
              </div>
            </div>
          </section>
        </MoveTransition>
      </div>
    </>
  );
};

export default Account;
