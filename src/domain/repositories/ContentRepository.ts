import { Content, State } from '../entities';

export interface ContentRepository extends State<Content | null>{
  activate(section: Content): void;
}
