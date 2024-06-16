import { useEffect, useRef, useState } from 'react'
import '../styles/result-text.scss'

interface Props {
  data: string
  key?: string
}

const ResultText: React.FC<Props>  = ({ data }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [animationClass, setAnimationClass] = useState<string>('');

  const handleOutAnimationEnd = () => {
    setAnimationClass('');
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
    if (data === '') return;
  
    const currentElement = textRef.current;
    currentElement?.removeEventListener('animationend', handleAnimationEnd);
    currentElement?.removeEventListener('animationend', handleOutAnimationEnd);

    setAnimationClass('show');
  
    currentElement?.addEventListener('animationend', handleAnimationEnd, { once: true });
  
    return () => {
      currentElement?.removeEventListener('animationend', handleAnimationEnd);
      currentElement?.removeEventListener('animationend', handleOutAnimationEnd);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <div ref={textRef} className={`result-text traps ${animationClass}`}>{ data }</div>
}

export default ResultText;

// useEffect(() => {
  //   if(data === '') return;

  //   setAnimationClass('show');
  //   if(textRef.current) {
  //     textRef.current.addEventListener('animationend', () => {
  //       console.log('done');
  //       setAnimationClass('out');
  //       textRef?.current?.addEventListener('animationend', () => {
  //         setAnimationClass('');
  //       })
  //     });
  //   }

  // }, [data])