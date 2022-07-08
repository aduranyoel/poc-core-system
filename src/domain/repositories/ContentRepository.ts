import { Content } from '../entities';

export interface ContentRepository {
  sections: Content[];
  active: Content;
  activate(section: Content): void;
  register(section: Content): void;
}
