import { useEffect, useRef, useState } from 'react';
import { SLOTS, TRANSITION_END } from '../../../constants';
import { Character, Dice, ResultText } from './index';

import '../styles/game-play.scss'

const GamePlay = () => {
  const characterRef = useRef<HTMLDivElement>(null);
  const [currentSlot, setCurrentSlot] = useState<number>(0);
  const [targetStep, setTargetStep] = useState<number>(0);
  const [stepsTaken, setStepsTaken] = useState<number>(0);
  const [result, setResult] = useState<string>('');

  const moveTo = (steps: number): void => {
    characterRef.current && characterRef.current.removeEventListener(TRANSITION_END, handleTransitionEnd);
    
    setResult('')
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

      setResult('+100')
    }
  };

  useEffect(() => {
    const character = characterRef.current;
    if (character) {
      character.addEventListener(TRANSITION_END, handleTransitionEnd);
    }
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

        <ResultText data={result} />
    </div>
  )
}

export default GamePlay;