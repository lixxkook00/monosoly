import React, { useState, useMemo, useCallback } from 'react';
import '../styles/dice.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../contexts/store';
import { useDispatch } from 'react-redux';
import { useEnergy } from '../../../contexts/user-slice';

interface Props {
  moveTo: (number: number) => void;
}

const TARGET_LIMIT = 6;

const diceStyles = [
  { rotateX: 0, rotateY: 0 },
  { rotateX: -180, rotateY: 0 },
  { rotateX: 0, rotateY: 90 },
  { rotateX: 0, rotateY: -90 },
  { rotateX: 90, rotateY: 0 },
  { rotateX: -90, rotateY: 0 },
];

const Dice: React.FC<Props> = ({ moveTo }) => {
  const [state, setState] = useState({
    target: 1,
    canRoll: true,
    rollCount: 0,
  });

  const energy = useSelector((state: RootState) => state.user.energy);
  const dispatch = useDispatch();

  const diceScale = useMemo(() => {
    return 0.1 * (document.querySelector('#app')?.clientWidth ?? 0);
  }, []);

  const handleRoll = useCallback(() => {
    if (!state.canRoll) return;
    if(energy === 0) return;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch(useEnergy())

    const randomTarget = Math.floor(Math.random() * TARGET_LIMIT) + 1;
    setState(prevState => ({
      ...prevState,
      target: randomTarget,
      canRoll: false,
      rollCount: prevState.rollCount + 1,
    }));

    setTimeout(() => {
      moveTo(randomTarget);
      setState(prevState => ({ ...prevState, canRoll: true }));
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moveTo, state.canRoll]);

  return (
    <div onClick={handleRoll} className="dice">
      <div id="dice" key={state.rollCount} data-side={state.target} style={{ width: `${diceScale}px`, height: `${diceScale}px` }}>
        {diceStyles.map((style, index) => (
          <div key={index} className={`sides side-${index + 1}`} style={{ transform: `rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg) translateZ(${diceScale / 2 - 0.5}px)` }}>
            {Array.from({ length: index + 1 }).map((_, dotIndex) => (
              <span key={dotIndex} className={`dot dot-${dotIndex + 1}`}></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dice;