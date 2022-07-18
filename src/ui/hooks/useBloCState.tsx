import { useEffect, useState } from 'react';
import { IBloC } from '../../domain';

export function useBloCState<T>(bloc: IBloC<T>): T {
  const [state, setState] = useState<T>(bloc.state);

  useEffect(() => {
    const subscription = bloc.subscribe(setState);
    return () => bloc.unsubscribe(subscription);
  }, [bloc]);

  return state;
}
