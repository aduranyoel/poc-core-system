import { ContentRepository, Content } from '../domain';

export class ContentRepositoryImpl implements ContentRepository {
  private static instance: ContentRepositoryImpl;
  public active: Content;
  public sections: Content[] = [];

  private constructor() {}

  public static getInstance(): ContentRepositoryImpl {
    if (!ContentRepositoryImpl.instance) {
      ContentRepositoryImpl.instance = new ContentRepositoryImpl();
    }

    return ContentRepositoryImpl.instance;
  }

  activate(section: Content): void {
    this.active = section;
  }

  register(section: Content): void {
    if (this.sections.some(s => s.id === section.id)) return;
    this.sections = [...this.sections, section];
  }
}
