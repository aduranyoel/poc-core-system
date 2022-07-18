import { State } from "./State";
import { Subscription } from "./subscription";

export interface IBloC<T> extends State<T>{
  subscribe(listener: Subscription<T>): Subscription<T>;
  unsubscribe(listener: Subscription<T>): void;
  setState(state: T): void;
}
