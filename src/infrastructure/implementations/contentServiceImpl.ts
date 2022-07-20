import { ContentService } from '../abstracts';
import { Content } from "../../entities";

export class ContentServiceImpl extends ContentService {

  constructor() {
    super(null);
  }

  activate(section: Content): void {
    this.setState(section);
  }
}
