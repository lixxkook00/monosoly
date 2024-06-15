interface PrizeItemProps {
  amount: number;
  title: string;
}

const PrizeItem = ({ amount, title }: PrizeItemProps) => {
  const amountSuffix = 'cho bạn và bạn của bạn';
  const formatAmount = (amount: number) => {
    return '+ ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <div className="bg-[#282A2F] rounded-xl flex items-center gap-4 px-6 py-8 cursor-pointer">
      <div>
        <img src="/images/chest.png" alt="character avatar" className="character-avt" />
      </div>
      <div className="flex flex-col gap-3 ">
        <p className="text-2xl">{title}</p>
        <div className="flex gap-5">
          <div className="flex flex-wrap gap-3">
            <img src="/images/gold-coin.png" alt="coin" />
            <p className="text-[#FCD74B] text-xl">{formatAmount(amount)}</p>
          </div>
          <p className="text-xl">{amountSuffix}</p>
        </div>
      </div>
    </div>
  );
};

export default PrizeItem;
