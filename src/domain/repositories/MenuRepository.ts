import { MenuItem } from '../entities';

export interface MenuRepository {
  register(menuItem: MenuItem): void;
  getAll(): MenuItem[];
}
