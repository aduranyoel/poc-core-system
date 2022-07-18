import { MenuItem } from '../entities';
import { State } from './State';

export interface MenuRepository extends State<MenuItem[]>{
  register(menuItem: MenuItem): void;
}
