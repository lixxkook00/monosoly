import { Background, MoveTransition } from '../../components';
import { FriendList, PrizeList } from './components';

const Friends = () => {
  const heading = 'Mời bạn bè!';

  return (
    <>
      <Background />
      <MoveTransition y="100vh">
        <div className="absolute w-full max-h-full min-h-full backdrop-blur-3xl px-2 pt-2 pb-[32%] overflow-y-scroll">
          <section className="p-5 pb-2">
            <p className="text-center text-4xl">{heading}</p>
          </section>

          <section className="w-full flex flex-col gap-6">
            <PrizeList />
          </section>

          <section className="w-full flex flex-col gap-6 pt-10">
            <FriendList />
          </section>
        </div>
      </MoveTransition>
    </>
  );
};

export default Friends;
