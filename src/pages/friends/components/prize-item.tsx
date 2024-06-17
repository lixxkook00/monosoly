import { useTranslation } from "react-i18next";

interface PrizeItemProps {
  amount: number;
  title: string;
}

const PrizeItem = ({ amount, title }: PrizeItemProps) => {
  const { t } = useTranslation();
  
  const formatAmount = (amount: number) => {
    return '+' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <div className="bg-[#282A2F] rounded-xl flex items-center px-2 py-4 cursor-pointer">
      <div className="mr-1">
        <img className="object-contain w-13" src="/images/chest.png" alt="character avatar" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm">{title}</p>
        <div className="flex gap-1">
          <div className="flex align-items">
            <img className="w-3 mr-1 object-contain" src="/images/gold-coin.png" alt="coin" />
            <div className="text-[#FCD74B] text-sm">{formatAmount(amount)}</div>
          </div>
          <p className="text-sm">{t('forYouAndYourFriends')}</p>
        </div>
      </div>
    </div>
  );
};

export default PrizeItem;
