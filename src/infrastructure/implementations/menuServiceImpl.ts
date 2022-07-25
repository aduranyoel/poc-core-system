import { MenuItem } from '../../domain';
import { MenuService } from '../abstracts';

export class MenuServiceImpl extends MenuService {

  constructor() {
    super([]);
  }

  register(menuItem: MenuItem): void {
    if (this.value.some(m => m.id === menuItem.id)) return;
    this.next([...this.value, menuItem]);
  }
}
