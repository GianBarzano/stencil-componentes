import { EventEmitter } from '../../stencil-public-runtime';
export declare class MySelect {
  /**
   * Define se é um Select comum, ou com múltipla seleção
   */
  multiple: boolean;
  /**
   * Valor selecionado. Pode ser um valor comum, ou uma lista de valores no caso
   */
  model: TSelectValue | TSelectValue[];
  /**
   * Lista utilizada para apresentar dados na tela
   */
  values: ISelectValue[];
  /**
   * Define se as opções aparecem ou não
   */
  isOpen: boolean;
  /**
   * Elemento representando o componente
   */
  element: any;
  /**
   * Evento de mudança de valor
   */
  valueChange: EventEmitter<IValueChangeEvent>;
  /**
   * Fico escutando a mudança de valor do model
   * @param newValue
   */
  handleModelChange(newValue: TSelectValue | TSelectValue[]): void;
  /**
   * Chamada quando um item é clicado
   */
  handleItemClick(value: ISelectValue): void;
  /**
   * Chamada quando o bloco do select é clicado
   * @param ev
   */
  handleSelectBlockClick(): void;
  /**
   * Chamada quando o componente perde o foco
   */
  handleFocusout(): void;
  /**
   * Chamada antes de renderizar elementos
   */
  componentWillRender(): void;
  componentDidUpdate(): void;
  /**
   * Verifica se um valor está no model
   * @param value
   */
  private isSelected;
  /**
   * Atualiza se os itens da lista estão marcados
   */
  private atualizaMarcacaoLista;
  /**
   * Retorna os itens selecionados na caixa de seleção.
   * Caso seja seleção multipla, retorna os itens separados por ","
   */
  private getSelectedNames;
  getCssClass(): string;
  getOptionCssClass(item: ISelectValue): string;
  getOptionsBlockCssClass(): string;
  render(): any;
}
export interface ISelectValue {
  checked?: boolean;
  value: TSelectValue;
  name: string;
}
export declare type TSelectValue = string | number | boolean;
export interface IValueChangeEvent {
  value: TSelectValue | TSelectValue[];
}
