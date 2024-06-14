import { SLOTS } from '../../../constants';
import '../styles/game-play.scss'
import Character from './character';

const GamePlay = () => {

  return (
    <div className="scene">
        <div className="scene-map w-full">
          <img className='w-full' src="/images/map-full.png" alt="" />
        </div>

        {/* FOR DEBUG ONLY */}
        <div className="scene-content w-full h-full">
          {
            SLOTS.map((slot, i) => <div key={i} className={`slot slot-${i + 1}`} style={{ left: slot.x + '%', top: slot.y + '%' }}></div>)
          }
        </div>

        <Character />
    </div>
  )
}

export default GamePlay;