import { useState } from 'react';
import '../styles/dice.scss'

interface props {
  moveTo: (number: number) => void;
}

const TARGET_LIMIT = 6;
const diceScale = 0.08 * window.innerWidth;
const diceStyle = [
  {
    rotateX: 0,
    rotateY: 0,
  },
  {
    rotateX: -180,
    rotateY: 0,
  },
  {
    rotateX: 0,
    rotateY: 90,
  },
  {
    rotateX: 0,
    rotateY: -90,
  },
  {
    rotateX: 90,
    rotateY: 0,
  },
  {
    rotateX: -90,
    rotateY: 0,
  },
]

const Dice: React.FC<props> = ({ moveTo }) => {
  const [target, setTarget] = useState(1);
  const [canRoll, setCanRoll] = useState(true);
  const [rollCount, setRollCount] = useState(0);

  const handleClick = () => {
    if(!canRoll) return;

    const randomTarget = Math.floor(Math.random() * TARGET_LIMIT) + 1;
    setTarget(randomTarget);
    setCanRoll(false);
    setRollCount(rollCount + 1);
    setTimeout(() => {
      moveTo(randomTarget);
      setCanRoll(true);
    }, 1000)

    console.log('move to : ', randomTarget);
  }

  return (
    <div onClick={handleClick} className="dice">
      {/* <img src={`/images/dice-${target}.png`} alt="" /> */}

      <div id="dice" key={rollCount} data-side={target} style={{ width: diceScale + 'px', height: diceScale + 'px' }}>
        <div className="sides side-1" style={{ transform: `rotateX(${diceStyle[0].rotateX}deg) rotateY(${diceStyle[0].rotateY}deg) translateZ(${diceScale/2 - 0.5}px)` }}>
          <span className="dot dot-1"></span>
          </div>
        <div className="sides side-2" style={{ transform: `rotateX(${diceStyle[1].rotateX}deg) rotateY(${diceStyle[1].rotateY}deg) translateZ(${diceScale/2 - 0.5}px)` }}>
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          </div>
        <div className="sides side-3" style={{ transform: `rotateX(${diceStyle[2].rotateX}deg) rotateY(${diceStyle[2].rotateY}deg) translateZ(${diceScale/2 - 0.5}px)` }}>
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          </div>
        <div className="sides side-4" style={{ transform: `rotateX(${diceStyle[3].rotateX}deg) rotateY(${diceStyle[3].rotateY}deg) translateZ(${diceScale/2 - 0.5}px)` }}>
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
          </div>
        <div className="sides side-5" style={{ transform: `rotateX(${diceStyle[4].rotateX}deg) rotateY(${diceStyle[4].rotateY}deg) translateZ(${diceScale/2 - 0.5}px)` }}>
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
          <span className="dot dot-5"></span>
          </div>
        <div className="sides side-6" style={{ transform: `rotateX(${diceStyle[5].rotateX}deg) rotateY(${diceStyle[5].rotateY}deg) translateZ(${diceScale/2 - 0.5}px)` }}>
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
          <span className="dot dot-5"></span>
          <span className="dot dot-6"></span>
          </div>
        </div>
    </div>
  )
}

export default Dice;