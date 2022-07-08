import { makeAutoObservable } from 'mobx';
import { MenuRepository, MenuItem } from '../domain';

export class MenuRepositoryImpl implements MenuRepository {
  private static instance: MenuRepositoryImpl;
  private menus: MenuItem[] = [];

  private constructor() {
    makeAutoObservable(this);
  }

  public static getInstance(): MenuRepositoryImpl {
    if (!MenuRepositoryImpl.instance) {
      MenuRepositoryImpl.instance = new MenuRepositoryImpl();
    }

    return MenuRepositoryImpl.instance;
  }

  getAll(): MenuItem[] {
    return this.menus;
  }

  register(menuItem: MenuItem): void {
    if (this.menus.some(m => m.id === menuItem.id)) return;
    this.menus = [...this.menus, menuItem];
  }
}
