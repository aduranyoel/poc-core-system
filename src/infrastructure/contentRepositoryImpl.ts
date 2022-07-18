import { Content, ContentRepository } from '../domain';
import { BloC } from './BloC';

export class ContentRepositoryImpl extends BloC<Content | null> implements ContentRepository {

  constructor() {
    super(null);
  }

  activate(section: Content): void {
    this.setState(section);
  }
}
