import { MenuRepository, MenuItem } from '../domain';
import { BloC } from './BloC';

export class MenuRepositoryImpl extends BloC<MenuItem[]> implements MenuRepository {

  constructor() {
    super([]);
  }

  register(menuItem: MenuItem): void {
    if (this.state.some(m => m.id === menuItem.id)) return;
    this.setState([...this.state, menuItem]);
  }
}
