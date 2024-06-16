import DailyTask from "./daily-task";

const DailyTaskModal: React.FC = () => {

  const awards = [
    {
      day: 'Ngày 1',
      award: '500',
      isClaimed: true,
    },
    {
      day: 'Ngày 2',
      award: '1K',
      isClaimed: true,
    },
    {
      day: 'Ngày 3',
      award: '2,5K',
      isClaimed: true,
    },
    {
      day: 'Ngày 4',
      award: '5K',
      isClaimed: true,
    },
    {
      day: 'Ngày 5',
      award: '15K',
      isClaimed: true,
    },
    {
      day: 'Ngày 6',
      award: '25K',
      isClaimed: true,
    },
    {
      day: 'Ngày 7',
      award: '100K',
      isClaimed: false,
    },
    {
      day: 'Ngày 8',
      award: '500K',
      isClaimed: false,
    },
    {
      day: 'Ngày 9',
      award: '1M',
      isClaimed: false,
    },
    {
      day: 'Ngày 10',
      award: '3M',
      isClaimed: false,
    },
  ]

  return <div className="flex-1 overflow-y-scroll">
    <div className="flex flex-col items-center gap-1 pb-14 overflow-y-scroll">
      <img className="w-15 mb-6 mt-1" src="/images/mission.png" alt="token" />
      <p className="text-center text-3xl px-3 mb-2 font-semibold">
        Tham gia kênh TG của
        <br />
        chúng tôi
      </p>

      <p className="text-sm px-5 text-center">
        Tích lũy xu khi đăng nhập vào trò chơi hàng ngày mà không cần bỏ qua. Nút “thu nhập” phải được nhấn  hàng ngày, nếu không việc đếm ngày sẽ bắt đầu lại
      </p>

      <div className="grid grid-cols-4 gap-3 w-full mt-3">
        {
          awards.map(({day, award, isClaimed}) => <DailyTask day={day} award={award} isClaimed={isClaimed} /> )
        }
      </div>

      <div className="absolute p-5 bottom-2 rounded-xl bg-neutral-600/75 w-11/12 text-center font-semibold">
        Quay lại ngày mai
      </div>
    </div>
  </div>
}

export default DailyTaskModal;