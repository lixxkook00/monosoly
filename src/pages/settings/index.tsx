import { useState } from "react";
import { Background, MoveTransition } from "../../components";
import { IcArrow } from "../../icons";
import Switch from "./components/switch";

const Settings:React.FC = () => {
  const [hapticState, setHapticState] = useState(true);
  const [coinAnimation, setCoinAnimation] = useState(true);

  return <>
    <Background />
    
    <div className="absolute w-full h-full backdrop-blur-3xl px-2 pt-2 pb-[32%] overflow-y-scroll">
      <MoveTransition y="5vh">
        <div className="text-center text-3xl font-semibold my-3">
          Settings
        </div>
      </MoveTransition>

      <MoveTransition y="15vh">
        <div className="bg-[#282A2F] rounded-xl flex items-center justify-between gap-2 px-4 py-3 cursor-pointer mt-3">
          <div className="flex flex-col">
            <div className="text-base font-semibold">
              Selection language
            </div>
            <div className="text-sm text-[#5E5F61]">
              Tiếng Việt
            </div>
          </div>

          <IcArrow />
        </div>
      </MoveTransition>

      <MoveTransition y="25vh">
        <div className="bg-[#282A2F] rounded-xl flex items-center justify-between gap-2 px-4 py-3 cursor-pointer mt-3">
          <div className="flex flex-col">
            <div className="text-base font-semibold">
              Selection language
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
              Haptic Feedback
          </div>
          <Switch isChecked={hapticState} onToggle={() => setHapticState(!hapticState)} />
        </div>

        <div className="flex justify-between items-center mt-4 px-4">
          <div className="text-base font-semibold">
              Coins animation
          </div>
          <Switch isChecked={coinAnimation} onToggle={() => setCoinAnimation(!coinAnimation)} />
        </div>
      </MoveTransition>
    </div>
  </>
}

export default Settings;