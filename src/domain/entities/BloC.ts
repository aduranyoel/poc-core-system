import { State } from './State';

export type Subscription<T> = (state: T) => void;

export abstract class BloC<T> implements State<T>{
  public state: T;
  private listeners: Subscription<T>[] = [];

  protected constructor(state: T) {
    this.state = state;
  }

  public subscribe(listener: Subscription<T>): Subscription<T> {
    this.listeners.push(listener);
    return listener;
  }

  public unsubscribe(listener: Subscription<T>): void {
    const subIdx = this.listeners.indexOf(listener);
    if (subIdx !== -1) {
      this.listeners.splice(subIdx, 1);
    }
  }

  public setState(state: T): void {
    this.state = state;
    this.listeners.forEach((listener: Subscription<T>) => listener(this.state));
  }
}
