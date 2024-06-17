import { useTranslation } from 'react-i18next';
import { Background, MoveTransition } from '../../components';
import { FriendList, PrizeList } from './components';

const Friends = () => {
  const { t } = useTranslation();

  return (
    <>
      <Background />
      
      <div className="absolute w-full max-h-full min-h-full backdrop-blur-3xl px-2 pt-2 pb-[32%] overflow-y-scroll">
        <MoveTransition y="10vh">
          <section className="p-5 pb-2">
            <p className="text-center text-4xl">
            {t('inviteFriends')}
            </p>
          </section>
        </MoveTransition>

        <MoveTransition y="30vh">
          <section className="w-full flex flex-col gap-6">
            <PrizeList />
          </section>
        </MoveTransition>

        <MoveTransition y="50vh">
          <section className="w-full flex flex-col gap-6 pt-10">
            <FriendList />
          </section>
        </MoveTransition>
      </div>
    </>
  );
};

export default Friends;
