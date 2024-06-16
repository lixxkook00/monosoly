import { useState } from 'react';

import { Background, MoveTransition } from '../../components';
import { formatAmount } from '../../utils';
import { MissedCards, MyCards, NewCards, ProfileBar } from './components';

const Mine = () => {
  const heading = 1200000;
  const username = 'Đặng Thuận';

  const buttonSettings = [
    { label: 'Thẻ của tôi' },
    { label: 'Thẻ mới' },
    { label: 'Thẻ bị bỏ lỡ' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [MyCards, NewCards, MissedCards];
  const ActiveCardComponent = cards[activeIndex];

  return (
    <>
      <Background />
      
      <div className="absolute w-full h-full backdrop-blur-3xl px-2 pt-2 pb-[30%] overflow-y-scroll">

        <MoveTransition y="-10vh">
          <section className="w-full flex flex-col gap-2">
            <ProfileBar />
          </section>
        </MoveTransition>

        <MoveTransition y="20vh">
          <section className="flex flex-col items-center p-4 gap-1">
            <img src="/images/token.png" alt="token" />
            <p className="text-center text-4xl">{formatAmount(heading)}</p>
          </section>
        </MoveTransition>

        <MoveTransition y="50vh">
          <section className="w-full flex flex-col gap-6 items-center">
            <div className="flex items-center justify-center bg-[#282A2F] p-1 gap-1 rounded-xl w-full">
              {buttonSettings.map(({ label }, index) => (
                <button
                  className="w-1/3 p-1 py-3 rounded-xl text-sm font-semibold"
                  style={{ background: activeIndex === index ? '#232323' : 'none' }}
                  key={label}
                  onClick={() => setActiveIndex(index)}>
                  {label}
                </button>
              ))}
            </div>

            <ActiveCardComponent />
          </section>
        </MoveTransition>

      </div>
    </>
  );
};

export default Mine;
