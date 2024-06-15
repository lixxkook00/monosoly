import { useState } from 'react';

import { MissedCards, MyCards, NewCards, ProfileBar } from './components';

const Mine = () => {
  const heading = 1200000;
  const username = 'Đặng Thuận';

  const format = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

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
      <div className="absolute scale-[1.25] h-full flex items-center">
        <img className="w-full" src="/images/map-full.png" alt="map" />
      </div>

      <div className="absolute w-full h-full backdrop-blur-3xl px-5 pt-5 pb-[30%] overflow-y-scroll">
        <section className="w-full flex flex-col gap-2">
          <ProfileBar img="" name={username} balance={'12,43k'} />
        </section>

        <section className="flex flex-col items-center p-4 gap-1">
          <img src="/images/token.png" alt="token" />
          <p className="text-center text-4xl">{format(heading)}</p>
        </section>

        <section className="w-full flex flex-col gap-6 items-center">
          <div
            className="flex items-center justify-center bg-[#282A2F] p-1 gap-1 rounded-xl w-full">
            {buttonSettings.map(({ label }, index) => (
              <button
                className="w-1/3 p-1 py-2 rounded-xl text-base font-semibold"
                style={{ background: activeIndex === index ? '#232323' : 'none' }}
                key={label}
                onClick={() => setActiveIndex(index)}>
                {label}
              </button>
            ))}
          </div>

          <ActiveCardComponent />
        </section>
      </div>
    </>
  );
};

export default Mine;
