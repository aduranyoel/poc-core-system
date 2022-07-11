import { MenuRepository, MenuItem, BloC } from '../domain';

export class MenuRepositoryImpl extends BloC<MenuItem[]> implements MenuRepository {
  private static instance: MenuRepositoryImpl;
  public state: MenuItem[] = [];

  private constructor() {
    super();
  }

  public static getInstance(): MenuRepositoryImpl {
    if (!MenuRepositoryImpl.instance) {
      MenuRepositoryImpl.instance = new MenuRepositoryImpl();
    }

    return MenuRepositoryImpl.instance;
  }

  register(menuItem: MenuItem): void {
    if (this.state.some(m => m.id === menuItem.id)) return;
    this.setState([...this.state, menuItem]);
  }
}
