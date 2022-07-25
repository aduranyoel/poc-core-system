import { ContentService } from '../abstracts';
import { Content } from "../../domain";

export class ContentServiceImpl extends ContentService {

  constructor() {
    super(null);
  }

  activate(section: Content): void {
    this.next(section);
  }
}
