const Airdrop = () => {
  const heading = 'Airdrop task';
  const description =
    'Ngày listing đang đến. Nhiệm vụ sẽ xuất hiện bên dưới. Hoàn thành chúng để tham gia';
  const taskTitle = 'Danh sách công việc';

  const btnText = 'Kết nối với ví TON của bạn';

  return (
    <>
      <div className="absolute scale-[1.25] h-full flex items-center">
        <img className="w-full" src="/images/map-full.png" alt="map" />
      </div>

      <div className="absolute w-full h-full backdrop-blur-3xl px-5 pt-5 pb-[32%] overflow-y-scroll">
        <section className="flex flex-col items-center p-5 gap-3">
          <img src="/images/token.png" alt="token" />
          <p className="text-center text-5xl">{heading}</p>
          <p className="text-center text-lg">{description}</p>
        </section>

        <section className="w-full flex flex-col gap-2">
          <p className="text-xl">{taskTitle}</p>

          <div className="w-full rounded-xl bg-[#5A60FF] p-8">
            <p className="text-center text-xl">{btnText}</p>
            <span></span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Airdrop;
