export class MenuItem {
  constructor(
    public id: string,
    public label: string,
    public action?: (...args: any[]) => undefined,
  ) {}
}
