import { useTranslation } from 'react-i18next';
import { Background, MoveTransition } from '../../components';

const Airdrop = () => {
  const { t } = useTranslation();

  const heading = t('airdropTask');
  const description = t('listingDayComing');
  const taskTitle = t('taskList');
  const btnText = t('connectToYourTONWallet');

  return (
    <>
      <Background />
      
      <div className="absolute w-full h-full backdrop-blur-3xl px-2 pt-2 pb-[32%] overflow-y-scroll">
        <MoveTransition y="10vh">
          <section className="flex flex-col items-center gap-3">
            <img src="/images/token.png" alt="token" />
            <p className="text-center text-3xl">{heading}</p>
            <p className="text-center text-base px-10 mt-3 mb-5">{description}</p>
          </section>
        </MoveTransition>

        <MoveTransition y="30vh">
          <section className="w-full flex flex-col gap-2">
            <p className="text-lg font-semibold mb-1">{taskTitle}</p>

            <div className="w-full rounded-xl bg-[#5A60FF] p-7">
              <p className="text-center text-base">{btnText}</p>
              <span></span>
            </div>
          </section>
        </MoveTransition>
      </div>
    </>
  );
};

export default Airdrop;
