import { MoveTransition } from '../../../components';
import { Card } from './';

const NewCards = () => {
  const cards = [
    {
      id: 1,
      title: 'Fantokens',
      amount: 100,
      energy: 1,
      total: 100,
      level: 1,
      img: 'package.jpg'
    },
    {
      id: 2,
      title: 'Fantokens',
      amount: 100,
      energy: 1,
      total: 100,
      level: 1,
      img: 'package.jpg'
    },
    {
      id: 3,
      title: 'Fantokens',
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
        {cards.map(({ id, img, title, amount, energy, total, level }) => (
          <Card
            key={id}
            img={img}
            title={title}
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

export default NewCards;
