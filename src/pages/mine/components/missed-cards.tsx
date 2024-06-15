import { Card } from './';

const MissedCard = () => {
  const cards = [
    {
      id: 1,
      title: 'Fantokens',
      subtitle: 'Lợi nhuận mỗi giờ',
      amount: 100,
      energy: 1,
      total: 100,
      level: 1,
      img: ''
    },
    {
      id: 2,
      title: 'Fantokens',
      subtitle: 'Lợi nhuận mỗi giờ',
      amount: 100,
      energy: 1,
      total: 100,
      level: 1,
      img: ''
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {cards.map(({ id, img, title, subtitle, amount, energy, total, level }) => (
        <Card
          key={id}
          img={img}
          title={title}
          subtitle={subtitle}
          amount={amount}
          energy={energy}
          total={total}
          level={level}
        />
      ))}
    </div>
  );
};

export default MissedCard;
