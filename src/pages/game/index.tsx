import { MoveTransition } from '../../components';
import { ProfileBar } from '../mine/components';
import { GamePlay, UserLevel } from './components';

const Game = () => {

  return (
    <>
      <MoveTransition y="-10vh">  
        <div className="absolute w-full p-5">
          <ProfileBar img="" name={'Admin'} />
        </div>
      </MoveTransition>

      <MoveTransition y="30vh">
        <GamePlay />
      </MoveTransition>


      <UserLevel />
    </>
  );
};

export default Game;
