import { useEffect, useState } from 'react';
import { BehaviorSubject } from '../../infrastructure';

export function useBloCState<T>(behaviorSubject: BehaviorSubject<T>): T {
  const [state, setState] = useState<T>(behaviorSubject.value);

  useEffect(() => {
    const subscription = behaviorSubject.subscribe(setState);
    return () => behaviorSubject.unsubscribe(subscription);
  }, [behaviorSubject]);

  return state;
}
