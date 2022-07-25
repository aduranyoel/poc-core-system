import { MenuItem } from '../../domain';
import { BehaviorSubject } from './BehaviorSubject';

export abstract class MenuService extends BehaviorSubject<MenuItem[]>{
  abstract register(menuItem: MenuItem): void;
}
