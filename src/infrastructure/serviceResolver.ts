import { Content, ContentRepository, IBloC, MenuItem, MenuRepository } from '../domain';
import { ContentRepositoryImpl } from './contentRepositoryImpl';
import { MenuRepositoryImpl } from './menuRepositoryImpl';

export class ServiceResolver {
  public ContentRepository: ContentRepository & IBloC<Content | null>;
  public MenuRepository: MenuRepository & IBloC<MenuItem[]>;
  private static instance: ServiceResolver;

  private constructor() {
    this.ContentRepository = new ContentRepositoryImpl();
    this.MenuRepository = new MenuRepositoryImpl();
  }

  public static resolve(): ServiceResolver {
    if (!ServiceResolver.instance) {
      ServiceResolver.instance = new ServiceResolver();
    }
    return ServiceResolver.instance;
  }
}
