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
    <div className="bg-[#282A2F] rounded-xl flex items-center px-4 py-6 cursor-pointer">
      <div className="mr-2">
        <img src="/images/chest.png" alt="character avatar" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-base">{title}</p>
        <div className="flex gap-2">
          <div className="flex align-items">
            <img className="w-3 mr-1 h-auto" src="/images/gold-coin.png" alt="coin" />
            <div className="text-[#FCD74B] text-sm">{formatAmount(amount)}</div>
          </div>
          <p className="text-sm">{amountSuffix}</p>
        </div>
      </div>
    </div>
  );
};

export default PrizeItem;
