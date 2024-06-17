import { useDispatch } from 'react-redux';
import { Background, MoveTransition } from '../../components';
import { TaskList } from './components';
import { show } from '../../contexts/modal-slice';
import { useTranslation } from 'react-i18next';

const Earn = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const heading = t('earnMoreMoney');
  const dailyTitle = t('dailyTasks');
  const workTitle = t('taskList');

  const dailyTask = [
    { id: 1, amount: 100000, title: t('dailyCheckin'), checked: true, img: 'chest.png', onClick: () => dispatch(show('dailyTaskModal')) }
  ];
  const generalTask = [
    {
      id: 1,
      amount: 100000,
      title: t('joinOurTGChannel'),
      checked: false,
      img: 'ic-telegram.png',
      onClick: () => dispatch(show('teleTaskModal'))
    },
    {
      id: 2,
      amount: 100000,
      title: t('monosolyGoods'),
      checked: false,
      img: 'ic-x.png'
    },
    {
      id: 3,
      amount: 100000,
      title: t('monosolyGoods'),
      checked: false,
      img: 'ic-youtube.png'
    },
    {
      id: 4,
      amount: 100000,
      title: t('monosolyGoods'),
      checked: false,
      img: 'ic-youtube.png'
    }
  ];

  return (
    <>
      <Background />
      
      <div className="absolute w-full h-full backdrop-blur-3xl px-2 pt-2 pb-[32%] overflow-y-scroll">

        <MoveTransition y="10vh">
          <section className="flex flex-col items-center gap-1">
            <img src="/images/token.png" alt="token" />
            <p className="text-center text-3xl">{heading}</p>
          </section>
        </MoveTransition>

        <MoveTransition y="30vh">  
          <section className="w-full flex flex-col gap-2">
            <TaskList title={dailyTitle} items={dailyTask} />
          </section>
        </MoveTransition>

        <MoveTransition y="50vh">
          <section className="w-full flex flex-col gap-2 pt-4">
            <TaskList title={workTitle} items={generalTask} />
          </section>
        </MoveTransition>
      </div>
    </>
  );
};

export default Earn;
