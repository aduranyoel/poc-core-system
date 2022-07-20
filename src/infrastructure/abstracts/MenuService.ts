import { MenuItem } from '../../entities';
import { BloC } from './BloC';

export abstract class MenuService extends BloC<MenuItem[]>{
  abstract register(menuItem: MenuItem): void;
}
