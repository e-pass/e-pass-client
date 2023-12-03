import { FC, useEffect, useState } from 'react';
import { cn } from '../utils/cn.ts';
import TextButton from './ui/TextButton.tsx';

interface Props {
  seconds?: number;
  className?: string;
}

const Timer: FC<Props> = ({seconds = 60, className = ''}) => {
  const [parsedDeadline, setParsedDeadline] = useState(new Date().getTime() + seconds * 1000 + 500);
  const [time, setTime] = useState(Math.floor((parsedDeadline - Date.now()) / 1000));

  useEffect(() => {
    const interval = setInterval(
      () => setTime(Math.floor((parsedDeadline - Date.now()) / 1000)),
      1000
    );

    if (time < 1) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [parsedDeadline, time]);

  const formatText = (sec: number) => {
    switch (true) {
      case sec % 100 >= 5 && sec % 100 <= 20:
        return 'секунд';
      case sec % 10 === 1:
        return 'секундy';
      case sec % 10 >= 2 && sec % 10 <= 4:
        return 'секунды';
      default:
        return 'секунд'
    }
  };

  const resetAttempt = () => {
    setParsedDeadline(() => {
      const dead = new Date().getTime() + seconds * 1000 + 500;
      setTime(Math.floor((dead - Date.now()) / 1000));

      return dead;
    });
  }

  return (
    <div className={cn(className)}>
      {time > 0 && (<p className={cn('normal-text-15')}>
        <span>Не пришел код? Запросить код еще раз через&nbsp;</span>
        <span className={cn('text-blue')}>{`${Math.floor(time)}`.padStart(2, '0')}</span>
        <span>&nbsp;{formatText(time)}</span>
      </p>)}

      {time < 1 && (<p className={cn('normal-text-15')}>
        Не пришел код?&nbsp;
        <TextButton onClick={resetAttempt} buttonStyle='blue' >
          Запросить код еще раз.
        </TextButton>
      </p>)}
    </div>
  );
};

export default Timer;