import { useState } from "react";
import { Background, MoveTransition } from "../../components";
import { IcArrow } from "../../icons";
import Switch from "./components/switch";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../contexts/store";
import { show } from "../../contexts/modal-slice";

const Settings:React.FC = () => {
  const { t } = useTranslation();
  const { language } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  
  const [hapticState, setHapticState] = useState(true);
  const [coinAnimation, setCoinAnimation] = useState(true);

  return <>
    <Background />
    
    <div className="absolute w-full h-full backdrop-blur-3xl px-2 pt-2 pb-[32%] overflow-y-scroll">
      <MoveTransition y="5vh">
        <div className="text-center text-3xl font-semibold my-3">
        {t('settings')}
        </div>
      </MoveTransition>

      <MoveTransition y="15vh">
        <div onClick={() => dispatch(show('languageModal'))} className="bg-[#282A2F] rounded-xl flex items-center justify-between gap-2 px-4 py-3 cursor-pointer mt-3">
          <div className="flex flex-col">
            <div className="text-base font-semibold">
            {t('selectionLanguage')}
            </div>
            <div className="text-sm text-[#5E5F61]">
              {t(language)}
            </div>
          </div>

          <IcArrow />
        </div>
      </MoveTransition>

      <MoveTransition y="25vh">
        <div className="bg-[#282A2F] rounded-xl flex items-center justify-between gap-2 px-4 py-3 cursor-pointer mt-3">
          <div className="flex flex-col">
            <div className="text-base font-semibold">
            {t('selectionLanguage')}
            </div>
            <div className="text-sm text-[#5E5F61]">
              MEXC
            </div>
          </div>

          <IcArrow />
        </div>
      </MoveTransition>

      <MoveTransition y="35vh">
        <div className="flex justify-between items-center mt-4 px-4">
          <div className="text-base font-semibold">
          {t('hapticFeedback')}
          </div>
          <Switch isChecked={hapticState} onToggle={() => setHapticState(!hapticState)} />
        </div>

        <div className="flex justify-between items-center mt-4 px-4">
          <div className="text-base font-semibold">
          {t('coinsAnimation')}
          </div>
          <Switch isChecked={coinAnimation} onToggle={() => setCoinAnimation(!coinAnimation)} />
        </div>
      </MoveTransition>
    </div>
  </>
}

export default Settings;