import { MonoButton } from "../../../components";
import { formatAmount } from "../../../utils";

const PackagePopup: React.FC = () => {
  return <>
    <section className="flex flex-col items-center gap-1 pb-6">
      <img className="w-20 mb-6 mt-6 rounded-xl" src="/images/package.jpg" alt="token" />
      <p className="text-center text-3xl px-3 mb-3 font-semibold">
        Fan tokens
      </p>

      <p className="text-sm px-3 mb-3 text-center">
        Tài sản kỹ thuật số mang lại trải nghiệm và
        <br />
        đặt quyền riêng cho người hâm mộ
      </p>

      <p className="text-xs px-3 text-center">
        Lợi nhuận mỗi giờ
      </p>
      <div className="flex gap-1">
        <img className="object-contain w-4" src="/images/gold-coin.png" alt="coin" />
        <p className="text-base font-semibold">+ {formatAmount(2.14)}k</p>
      </div>

      <div className="flex gap-2 mt-2 mb-4">
        <img className="object-contain w-7" src="/images/gold-coin.png" alt="coin" />
        <p className="text-2xl font-semibold">+ {formatAmount(5000)}</p>
      </div>

      <MonoButton label="Nhận" onClick={() => {}} className="px-8 py-4 w-full font-bold text-xl"/>
    </section>
  </>
}

export default PackagePopup;