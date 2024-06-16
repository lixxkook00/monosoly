import { FriendList, PrizeList } from './components';

const Friends = () => {
  const heading = 'Mời bạn bè!';

  return (
    <>
      <div className="absolute scale-[1.25] h-full flex items-center">
        <img className="w-full" src="/images/map-full.png" alt="map" />
      </div>

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
    </>
  );
};

export default Friends;
