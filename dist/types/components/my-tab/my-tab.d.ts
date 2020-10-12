import { EventEmitter } from '../../stencil-public-runtime';
export interface ITabActivateEvent {
  name: string;
}
export declare class MyTab {
  name: string;
  active: boolean;
  tabActivate: EventEmitter<ITabActivateEvent>;
  onClick(): void;
  getCssClass(): string;
  render(): any;
}
