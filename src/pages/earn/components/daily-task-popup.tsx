import { useTranslation } from "react-i18next";
import DailyTask from "./daily-task";

const DailyTaskModal: React.FC = () => {
  const { t } = useTranslation();

  const awards = [
    {
      day: '1',
      award: '500',
      isClaimed: true,
    },
    {
      day: '2',
      award: '1K',
      isClaimed: true,
    },
    {
      day: '3',
      award: '2,5K',
      isClaimed: true,
    },
    {
      day: '4',
      award: '5K',
      isClaimed: true,
    },
    {
      day: '5',
      award: '15K',
      isClaimed: true,
    },
    {
      day: '6',
      award: '25K',
      isClaimed: true,
    },
    {
      day: '7',
      award: '100K',
      isClaimed: false,
    },
    {
      day: '8',
      award: '500K',
      isClaimed: false,
    },
    {
      day: '9',
      award: '1M',
      isClaimed: false,
    },
    {
      day: '10',
      award: '3M',
      isClaimed: false,
    },
  ]

  return <div className="flex-1 overflow-y-scroll">
    <div className="flex flex-col items-center gap-1 pb-14 overflow-y-scroll">
      <img className="w-15 mb-6 mt-1" src="/images/mission.png" alt="token" />
      <p className="text-center text-3xl px-10 mb-2 font-semibold">
        {t('joinOurTGChannel')}
      </p>

      <p className="text-sm px-5 text-center">
        {t('accumulateCoinsDailyLogin')}
      </p>

      <div className="grid grid-cols-4 gap-3 w-full mt-3">
        {
          awards.map(({day, award, isClaimed}) => <DailyTask key={day} day={t('day') + ' ' + day} award={award} isClaimed={isClaimed} /> )
        }
      </div>

      <div className="absolute p-5 bottom-2 rounded-xl bg-neutral-600/75 w-11/12 text-center font-semibold">
        {t('comeBackTomorrow')}
      </div>
    </div>
  </div>
}

export default DailyTaskModal;