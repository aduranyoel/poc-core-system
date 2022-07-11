import { ContentRepository, Content, BloC } from '../domain';

export class ContentRepositoryImpl extends BloC<Content> implements ContentRepository {
  private static instance: ContentRepositoryImpl;

  private constructor() {
    super();
  }

  public static getInstance(): ContentRepositoryImpl {
    if (!ContentRepositoryImpl.instance) {
      ContentRepositoryImpl.instance = new ContentRepositoryImpl();
    }

    return ContentRepositoryImpl.instance;
  }

  activate(section: Content): void {
    this.setState(section);
  }
}
