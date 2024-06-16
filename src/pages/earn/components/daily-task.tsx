interface DailyTaskProps {
  day: string;
  award: string;
  isClaimed: boolean;
}

const DailyTask: React.FC<DailyTaskProps> = ({day, award, isClaimed}) => {
  return <div className={`${isClaimed ? 'bg-[#4EB059]' : 'bg-[#000000]' } flex flex-col justify-center items-center py-1 rounded-lg`}>
    <p className="text-sm font-semibold">
      {day}
    </p>
    <img className="object-contain my-1" src="/images/gold-coin-large.png" alt="coin" />
    <p className="text-base font-semibold">
      {award}
    </p>
  </div>
}

export default DailyTask;