import { Content } from '../../entities';
import { ContentRepository } from '../../repositories';

export interface ActivateContentUseCase {
  invoke: ContentRepository['activate'];
}

export class ActivateContent implements ActivateContentUseCase {

  constructor(private contentRepository: ContentRepository) {}

  invoke(section: Content): void {
    this.contentRepository.activate(section);
  }
}
