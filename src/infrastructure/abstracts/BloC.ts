import { Subscription } from '../types';

export abstract class BloC<T> {
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
    if (subIdx === -1) return;
    this.listeners.splice(subIdx, 1);
  }

  public setState(state: T): void {
    this.state = state;
    this.listeners.forEach((listener: Subscription<T>) => listener(this.state));
  }
}
