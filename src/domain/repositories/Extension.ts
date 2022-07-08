export interface Extension {
  id: string;
  init(): Promise<void>;
  destroy(): Promise<void>;
}
