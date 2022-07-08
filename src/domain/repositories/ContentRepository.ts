import { Content } from '../entities';

export interface ContentRepository {
  sections: Content[];
  active: Content | null;
  activate(section: Content): void;
  register(section: Content): void;
}
