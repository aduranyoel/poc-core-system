import { MenuItem } from '../../entities';
import { MenuRepository } from '../../repositories';

export interface RegisterMenuUseCase {
  invoke: MenuRepository['register'];
}

export class RegisterMenu implements RegisterMenuUseCase {

  constructor(private _menuRepository: MenuRepository) {
  }

  public invoke(item: MenuItem): void {
    return this._menuRepository.register(item);
  }
}
