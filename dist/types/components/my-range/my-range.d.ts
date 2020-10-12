import { EventEmitter } from '../../stencil-public-runtime';
export interface IValueChange {
  valor: string;
}
export declare class MyRange {
  valor: string;
  rotulo: string;
  placeholder: string;
  valueChange: EventEmitter<IValueChange>;
  el: any;
  valueChanged(): void;
  /**
   * Retorna a classe da div container principal do componente
   */
  getCssClass(): string;
  /**
   * Chamado quando o input é alterado
   * @param event
   */
  onInputChange(event: any): void;
  render(): any;
}
