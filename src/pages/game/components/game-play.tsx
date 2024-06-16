import { useEffect, useRef, useState } from 'react';
import { SLOTS, TRANSITION_END } from '../../../constants';
import { Character, Dice, ResultText } from './index';

import '../styles/game-play.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../../contexts/store';
import { useDispatch } from 'react-redux';
import { setPosition } from '../../../contexts/user-slice';

const GamePlay = () => {
  const position = useSelector((state: RootState) => state.user.position);
  const dispatch = useDispatch();

  const characterRef = useRef<HTMLDivElement>(null);
  const [currentSlot, setCurrentSlot] = useState<number>(position);
  const [targetStep, setTargetStep] = useState<number>(0);
  const [stepsTaken, setStepsTaken] = useState<number>(0);
  const [result, setResult] = useState({ amount: 0, type: 'award' });

  const moveTo = (steps: number): void => {
    characterRef.current && characterRef.current.removeEventListener(TRANSITION_END, handleTransitionEnd);
    
    setResult({ amount: 0, type: 'award' })
    setTargetStep(steps);
    setStepsTaken(1);
    stepUp();
  };

  const stepUp = (): void => {
    setCurrentSlot(prevSlot => (prevSlot + 1) % SLOTS.length);
  };

  const handleTransitionEnd = (event: TransitionEvent): void => {
    if (event.target !== characterRef.current) return;
    characterRef.current && characterRef.current.removeEventListener(TRANSITION_END, handleTransitionEnd);
    if (stepsTaken < targetStep) {
      setStepsTaken(prevSteps => prevSteps + 1);
      stepUp();
    } else {
      setTargetStep(0);
      setStepsTaken(0);

      setResult({ amount: SLOTS[currentSlot].amount, type: SLOTS[currentSlot].type })
    }
  };

  useEffect(() => {
    const character = characterRef.current;
    if (character) {
      character.addEventListener(TRANSITION_END, handleTransitionEnd);
    }

    dispatch(setPosition(currentSlot));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlot]);

  const getPosition = (target: number): { x: string; y: string } => {
    if (!SLOTS[target]) return { x: '0%', y: '0%' };
    return {
      x: `${SLOTS[target].x}%`,
      y: `${SLOTS[target].y}%`,
    };
  };

  return (
    <div className="scene">
        <div className="scene-map w-full">
          <img className='w-full' src="/images/map-full.png" alt="" />
        </div>

        <Dice moveTo={moveTo} />

        <Character ref={characterRef} x={getPosition(currentSlot).x} y={getPosition(currentSlot).y} />

        <ResultText amount={result.amount} type={result.type} />
    </div>
  )
}

export default GamePlay;