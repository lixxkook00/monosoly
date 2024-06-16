import { Background, MoveTransition } from '../../components';

const Airdrop = () => {
  const heading = 'Airdrop task';
  const description =
    'Ngày listing đang đến. Nhiệm vụ sẽ xuất hiện bên dưới. Hoàn thành chúng để tham gia';
  const taskTitle = 'Danh sách công việc';

  const btnText = 'Kết nối với ví TON của bạn';

  return (
    <>
      <Background />
      <MoveTransition y="100vh">
        <div className="absolute w-full h-full backdrop-blur-3xl px-2 pt-2 pb-[32%] overflow-y-scroll">
          <section className="flex flex-col items-center gap-3">
            <img src="/images/token.png" alt="token" />
            <p className="text-center text-3xl">{heading}</p>
            <p className="text-center text-base mt-3 mb-5">{description}</p>
          </section>

          <section className="w-full flex flex-col gap-2">
            <p className="text-lg font-semibold mb-1">{taskTitle}</p>

            <div className="w-full rounded-xl bg-[#5A60FF] p-7">
              <p className="text-center text-base">{btnText}</p>
              <span></span>
            </div>
          </section>
        </div>
      </MoveTransition>
    </>
  );
};

export default Airdrop;
