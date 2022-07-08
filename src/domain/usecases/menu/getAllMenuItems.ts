import { MenuItem } from '../../entities';
import { MenuRepository } from '../../repositories';

export interface GetAllMenuItemsUseCase {
  invoke: MenuRepository['getAll'];
}
export class GetAllMenuItems implements GetAllMenuItemsUseCase {
  constructor(private _menuRepository: MenuRepository) {
  }
  public invoke(): MenuItem[] {
    return this._menuRepository.getAll();
  }
}
