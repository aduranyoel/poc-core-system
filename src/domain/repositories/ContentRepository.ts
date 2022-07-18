import { Content } from '../entities';
import { State } from './State';

export interface ContentRepository extends State<Content | null>{
  activate(section: Content): void;
}
