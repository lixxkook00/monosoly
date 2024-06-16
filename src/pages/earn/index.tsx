import { TaskList } from './components';

const Earn = () => {
  const heading = 'Kiếm thêm tiền';
  const dailyTitle = 'Nhiệm vụ hàng ngày';
  const workTitle = 'Danh sách công việc';
  const dailyTask = [
    { id: 1, amount: 100000, title: 'Checkin hằng ngày', checked: true, img: 'chest.png' }
  ];
  const generalTask = [
    {
      id: 1,
      amount: 100000,
      title: 'Tham gia kênh TG của chúng tôi',
      checked: false,
      img: 'ic-telegram.png'
    },
    {
      id: 2,
      amount: 100000,
      title: 'Hàng hoá MonoSoly',
      checked: false,
      img: 'ic-x.png'
    },
    {
      id: 3,
      amount: 100000,
      title: 'Hàng hoá MonoSoly',
      checked: true,
      img: 'ic-youtube.png'
    },
    {
      id: 4,
      amount: 100000,
      title: 'Hàng hoá MonoSoly',
      checked: false,
      img: 'ic-youtube.png'
    }
  ];

  return (
    <>
      <div className="absolute scale-[1.25] h-full flex items-center">
        <img className="w-full" src="/images/map-full.png" alt="map" />
      </div>

      <div className="absolute w-full h-full backdrop-blur-3xl px-2 pt-2 pb-[32%] overflow-y-scroll">
        <section className="flex flex-col items-center gap-1">
          <img src="/images/token.png" alt="token" />
          <p className="text-center text-3xl">{heading}</p>
        </section>

        <section className="w-full flex flex-col gap-2">
          <TaskList title={dailyTitle} items={dailyTask} />
        </section>

        <section className="w-full flex flex-col gap-2 pt-4">
          <TaskList title={workTitle} items={generalTask} />
        </section>
      </div>
    </>
  );
};

export default Earn;
