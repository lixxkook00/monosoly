import { Card } from './';

const NewCards = () => {
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
    },
    {
      id: 3,
      title: 'Fantokens',
      subtitle: 'Lợi nhuận mỗi giờ',
      amount: 100,
      energy: 1,
      total: 100,
      level: 1,
      img: ''
    },
    {
      id: 4,
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
    <div className="grid grid-cols-2 gap-2 w-full">
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

export default NewCards;
