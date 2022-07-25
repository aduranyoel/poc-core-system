import { Content } from "../../domain";
import { BehaviorSubject } from './BehaviorSubject';

export abstract class ContentService extends BehaviorSubject<Content | null>{
  abstract activate(section: Content): void;
}
