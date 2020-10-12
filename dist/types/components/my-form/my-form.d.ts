import { EventEmitter } from '../../stencil-public-runtime';
export declare class MyTabs {
  model: any;
  campos: ICampoForm[];
  /**
   * Evento de mudança de valor
   */
  valueChange: EventEmitter<any>;
  /**
   * Fico escutando a mudança de valor do model
   * @param newValue
   */
  handleModelChange(newValue: any): void;
  componentDidLoad(): void;
  getCssClass(): string;
  /**
   * Retorna o valo referente a um campo
   * @param nome
   */
  getCampoValor(nome: string): any;
  render(): any;
}
export declare type TCampoFormTipo = 'input-text' | 'input-number' | 'dropdown' | 'dropdown-multiple' | 'custom';
export interface ICampoForm {
  nome: string;
  tipo: TCampoFormTipo;
  config?: any;
}
