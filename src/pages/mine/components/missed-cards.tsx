import { MoveTransition } from '../../../components';
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
      img: 'package.jpg'
    },
    {
      id: 2,
      title: 'Fantokens',
      subtitle: 'Lợi nhuận mỗi giờ',
      amount: 100,
      energy: 1,
      total: 100,
      level: 1,
      img: 'package.jpg'
    }
  ];

  return (
    <MoveTransition y="20vh">
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
    </MoveTransition>
  );
};

export default MissedCard;
