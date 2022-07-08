import { ContentRepository, Content } from '../domain';

export class ContentRepositoryImpl implements ContentRepository {
  private static instance: ContentRepositoryImpl;
  public active: Content | null = null;
  public sections: Content[] = [];

  private constructor() {}

  public static getInstance(): ContentRepositoryImpl {
    if (!ContentRepositoryImpl.instance) {
      ContentRepositoryImpl.instance = new ContentRepositoryImpl();
    }

    return ContentRepositoryImpl.instance;
  }

  activate(section: Content): void {
    this.active = new Content(section.id, section.component);
  }

  register(section: Content): void {
    if (this.sections.some(s => s.id === section.id)) return;
    this.sections = [...this.sections, section];
  }
}
