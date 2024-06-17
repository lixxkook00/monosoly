import { useTranslation } from 'react-i18next';
import { PrizeItem } from './';

const PrizeList = () => {
  const { t } = useTranslation();

  const items = [
    { id: 1, amount: 5000, title: t('inviteFriends') },
    { id: 2, amount: 5000, title: t('inviteFriendsWithPremiumTelegram') }
  ];

  return (
    <>
      <div className="">
        <p className="text-center text-lg">
          {t('youAndFriendsWillReceiveReward')}
        </p>
      </div>

      <div className="flex flex-col align-center gap-3">
        {items.map(({ amount, title, id }) => (
          <PrizeItem key={id} amount={amount} title={title} />
        ))}
      </div>
    </>
  );
};

export default PrizeList;
