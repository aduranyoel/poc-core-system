import { MenuItem } from '../../entities';
import { MenuService } from '../abstracts';

export class MenuServiceImpl extends MenuService {

  constructor() {
    super([]);
  }

  register(menuItem: MenuItem): void {
    if (this.state.some(m => m.id === menuItem.id)) return;
    this.setState([...this.state, menuItem]);
  }
}
