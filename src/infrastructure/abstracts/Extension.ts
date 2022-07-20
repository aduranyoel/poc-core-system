export abstract class Extension {
  abstract id: string;
  abstract init(): Promise<void>;
  abstract destroy(): Promise<void>;
}
