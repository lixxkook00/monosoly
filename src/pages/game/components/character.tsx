import { SLOTS } from '../../../constants';
import '../styles/character.scss'

const Character = () => {

  const currentSlot = 16;
  const getPosition = () => {
    return {
      x : SLOTS[currentSlot].x - 1 + '%',
      y : SLOTS[currentSlot].y - 1 + '%',
    }
  }

  return (
    <div className="character" style={{ left: getPosition().x, top: getPosition().y }}>
      <img src="/images/ic-x.png" alt="" className="character-avt"/>
      <img src="/images/pointer.png" alt="" className="character-arrow" />
    </div>
  )
}

export default Character;