import { MenuItem, State } from '../entities';

export interface MenuRepository extends State<MenuItem[]>{
  register(menuItem: MenuItem): void;
}
