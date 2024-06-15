import { forwardRef } from 'react';
import '../styles/character.scss';

interface CharacterProps {
  x: string;
  y: string;
}

const Character = forwardRef<HTMLDivElement, CharacterProps>(({ x, y }, ref) => {

  return (
    <div ref={ref} className="character" style={{ left: x, top: y }}>
      <img src="/images/ic-x.png" alt="character avatar" className="character-avt" style={{ cursor: 'pointer' }} />
      <img src="/images/pointer.png" alt="pointer icon" className="character-arrow" />
    </div>
  );
});

export default Character;