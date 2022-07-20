import { Content } from "../../entities";
import { BloC } from './BloC';

export abstract class ContentService extends BloC<Content | null>{
  abstract activate(section: Content): void;
}
