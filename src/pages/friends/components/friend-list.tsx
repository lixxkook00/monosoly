import { useTranslation } from "react-i18next";
import { IcPlusMembers } from "../../../icons";

const friends: { id: number; img: string; name: string }[] = [];

const FriendList = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center flex-col">
      <p className="text-center text-2xl mb-5 font-semibold">{t('moreRewards')}</p>
      <p className="text-lg mb-2 font-semibold">{t('yourFriendsList')}</p>

      <div className="bg-[#282A2F] rounded-xl p-10 mb-3">
        {friends.length === 0 ? (
          <p className="text-center text-lg text-[#686A6D] font-bold">{t('youHaveNotInvitedAnyone')}</p>
        ) : (
          friends.map(({ id }) => <div key={id}></div>)
        )}
      </div>

      <div className="flex w-full items-stretch gap-4">
        <div className="flex-[7] w-full rounded-lg bg-[#5A60FF] p-6 flex justify-center">
          <p className="text-xl mr-2 font-bold">{t('inviteFriendsAgain')}</p>
          <IcPlusMembers />
        </div>
        <div className="flex-1 w-full rounded-lg bg-[#5A60FF] p-6">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
