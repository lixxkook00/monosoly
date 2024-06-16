import { MonoButton } from "../../../components";
import { formatAmount } from "../../../utils";

const TeleTaskModal: React.FC = () => {
  return <>
    <section className="flex flex-col items-center gap-1">
      <img className="w-15 mb-6 mt-6" src="/images/ic-telegram.png" alt="token" />
      <p className="text-center text-3xl px-3 mb-3 font-semibold">
        Tham gia kênh TG của
        <br />
        chúng tôi
      </p>

      <MonoButton label="Join" onClick={() => {}} className="px-8"/>

      <div className="flex gap-2 mt-6 mb-10">
          <img className="object-contain w-7" src="/images/gold-coin.png" alt="coin" />
          <p className="text-2xl font-semibold">{formatAmount(5000)}</p>
        </div>
    </section>
  </>
}

export default TeleTaskModal;