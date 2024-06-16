import { PrizeItem } from './';

const items = [
  { id: 1, amount: 5000, title: 'Mời bạn bè' },
  { id: 2, amount: 5000, title: 'Mời bạn bè với Telegram cao cấp' }
];

const PrizeList = () => {
  const title = 'Bạn và bạn bè sẽ nhận được phần thường';

  return (
    <>
      <div className="">
        <p className="text-center text-lg">{title}</p>
      </div>

      <div className="flex flex-col align-center gap-3">
        {items.map(({ amount, title, id }) => (
          <PrizeItem key={id} amount={amount} title={title} />
        ))}
      </div>
    </>
  );
};

export default PrizeList;
