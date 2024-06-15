const friends: { id: number; img: string; name: string }[] = [];

const FriendList = () => {
  const title = 'Nhiều phần thưởng hơn';
  const subtitle = 'Bạn và bạn bè sẽ nhận được phần thường';

  const emptyFriendList = 'Bạn chưa mời ai';

  const inviteText = 'Mời bạn bè';

  return (
    <div className="flex justify-center flex-col gap-6">
      <p className="text-center text-4xl">{title}</p>
      <p className="text-xl">{subtitle}</p>

      <div className="bg-[#282A2F] rounded-xl p-10">
        {friends.length === 0 ? (
          <p className="text-center text-xl text-[#686A6D]">{emptyFriendList}</p>
        ) : (
          friends.map(({ id }) => <div key={id}></div>)
        )}
      </div>

      <div className="flex w-full items-stretch gap-4">
        <div className="flex-[7] w-full rounded-lg bg-[#5A60FF] p-6">
          <p className="text-center text-xl">{inviteText}</p>
          <span></span>
        </div>
        <div className="flex-1 w-full rounded-lg bg-[#5A60FF] p-6">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
