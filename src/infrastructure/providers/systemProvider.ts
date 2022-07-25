import { ContentService, MenuService } from '../abstracts';
import { ContentServiceImpl, MenuServiceImpl } from '../implementations';

export class SystemProvider {
  private static instance: SystemProvider;

  public ContentService: ContentService;
  public MenuService: MenuService;

  private constructor() {
    this.ContentService = new ContentServiceImpl();
    this.MenuService = new MenuServiceImpl();
  }

  public static provide(): SystemProvider {
    if (!SystemProvider.instance) {
      SystemProvider.instance = new SystemProvider();
    }
    return SystemProvider.instance;
  }
}
