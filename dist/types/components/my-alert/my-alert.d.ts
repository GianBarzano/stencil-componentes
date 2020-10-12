import { EventEmitter } from '../../stencil-public-runtime';
export interface IHidedEvent {
  when: Date;
}
export declare class MyAlert {
  text: string;
  kind: "info" | "success" | "error";
  hide: boolean;
  onhided: EventEmitter<IHidedEvent>;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  /**
   * Chamado quando o botão for clicado
   */
  onClick(): void;
  getCssClass(): string;
  render(): any;
}
