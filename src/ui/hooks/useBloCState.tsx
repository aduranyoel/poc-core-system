import { useEffect, useState } from 'react';
import { BloC } from '../../infrastructure';

export function useBloCState<T>(bloc: BloC<T>): T {
  const [state, setState] = useState<T>(bloc.state);

  useEffect(() => {
    const subscription = bloc.subscribe(setState);
    return () => bloc.unsubscribe(subscription);
  }, [bloc]);

  return state;
}
