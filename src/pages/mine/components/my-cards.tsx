import { Card } from './';

const MyCards = () => {
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
    },
    {
      id: 5,
      title: 'Fantokens',
      subtitle: 'Lợi nhuận mỗi giờ',
      amount: 100,
      energy: 1,
      total: 100,
      level: 1,
      img: ''
    },
    {
      id: 6,
      title: 'Fantokens',
      subtitle: 'Lợi nhuận mỗi giờ',
      amount: 100,
      energy: 1,
      total: 100,
      level: 1,
      img: ''
    },
    {
      id: 7,
      title: 'Fantokens',
      subtitle: 'Lợi nhuận mỗi giờ',
      amount: 100,
      energy: 1,
      total: 100,
      level: 1,
      img: ''
    },
    {
      id: 8,
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

export default MyCards;
