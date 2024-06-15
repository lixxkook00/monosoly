import { ProfileBar } from "../mine/components";
import { GamePlay, UserLevel } from "./components";

const Game = () => {
  return <>
    <div className="absolute w-full p-5">
      <ProfileBar img="" name={'Admin'} balance={'12,43k'} />
    </div>

    <GamePlay />

    <UserLevel />
  </>
}

export default Game;