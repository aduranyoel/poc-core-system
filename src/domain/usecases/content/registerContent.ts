import { Content } from '../../entities';
import { ContentRepository } from '../../repositories';

export interface RegisterContentUseCase {
  invoke: ContentRepository['register'];
}

export class RegisterContent implements RegisterContentUseCase {

  constructor(private contentRepository: ContentRepository) {}

  invoke(section: Content): void {
    this.contentRepository.register(section);
  }
}
