import { Subscription } from '../types';

export abstract class BehaviorSubject<T> {
  public value: T;
  private listeners: Subscription<T>[] = [];

  protected constructor(value: T) {
    this.value = value;
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

  public next(state: T): void {
    this.value = state;
    this.listeners.forEach((listener: Subscription<T>) => listener(this.value));
  }
}
