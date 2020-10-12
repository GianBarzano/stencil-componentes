import { ITabActivateEvent } from '../my-tab/my-tab';
export declare class MyTabs {
  activeTab: string;
  handleActiveTabChange(newValue: string): void;
  element: any;
  /**
   * Chamado quando uma tab filha fica ativa
   * @param e
   */
  tabChildActivate(e: CustomEvent<ITabActivateEvent>): void;
  componentDidLoad(): void;
  /**
   * Retorna lista de MyTab filhas
   */
  private getHeadings;
  getCssClass(): string;
  render(): any;
}
