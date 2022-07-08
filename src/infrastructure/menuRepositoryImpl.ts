import { MenuRepository, MenuItem } from '../domain';

export class MenuRepositoryImpl implements MenuRepository {
  private static instance: MenuRepositoryImpl;
  public items: MenuItem[] = [];

  private constructor() {}

  public static getInstance(): MenuRepositoryImpl {
    if (!MenuRepositoryImpl.instance) {
      MenuRepositoryImpl.instance = new MenuRepositoryImpl();
    }

    return MenuRepositoryImpl.instance;
  }

  register(menuItem: MenuItem): void {
    if (this.items.some(m => m.id === menuItem.id)) return;
    this.items = [...this.items, menuItem];
  }
}
