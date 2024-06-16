import { useEffect, useRef, useState } from 'react'
import '../styles/result-text.scss'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../../../contexts/user-slice'
import { SLOT_TYPE } from '../../../constants'

interface Props {
  amount: number
  type: string
}

const ResultText: React.FC<Props>  = ({ amount, type }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [animationClass, setAnimationClass] = useState<string>('');
  const [typeClass, setTypeClass] = useState<string>('award');
  const dispatch = useDispatch();

  const handleOutAnimationEnd = () => {
    setAnimationClass('');
    const filnalAmount = (type === SLOT_TYPE.AWARD) ? amount : amount * -1;
    dispatch(incrementByAmount(filnalAmount))
  };

  const handleAnimationEnd = () => {
    console.log('done');
    
    const currentElement = textRef.current;
    setTimeout(() => {
      setAnimationClass('out');
    }, 350)

    currentElement?.addEventListener('animationend', handleOutAnimationEnd, { once: true });
  };

  useEffect(() => {
    console.log('runned');
    if (amount === 0) return;
  
    const currentElement = textRef.current;
    currentElement?.removeEventListener('animationend', handleAnimationEnd);
    currentElement?.removeEventListener('animationend', handleOutAnimationEnd);

    setTypeClass(type);
    setAnimationClass('show');
  
    currentElement?.addEventListener('animationend', handleAnimationEnd, { once: true });
  
    return () => {
      currentElement?.removeEventListener('animationend', handleAnimationEnd);
      currentElement?.removeEventListener('animationend', handleOutAnimationEnd);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  return <div ref={textRef} className={`result-text ${typeClass} ${animationClass}`}>{ type === SLOT_TYPE.AWARD ? '+' : '-' }{ amount }</div>
}

export default ResultText;