import { Component, h, Prop, Watch, Event, EventEmitter, State, Element } from '@stencil/core';

@Component({
  tag: 'my-select',
  styleUrl: 'my-select.scss',
  scoped: true,
})
export class MySelect {
  /**
   * Define se é um Select comum, ou com múltipla seleção
   */
  @Prop() multiple: boolean = false;
  /**
   * Valor selecionado. Pode ser um valor comum, ou uma lista de valores no caso
   */
  @Prop({mutable: true}) model: TSelectValue | TSelectValue[] = null;

  /**
   * Lista utilizada para apresentar dados na tela
   */
  @Prop({mutable: true}) values: ISelectValue[] = [];

  /**
   * Define se as opções aparecem ou não
   */
  @State() isOpen: boolean = false;

  /**
   * Elemento representando o componente
   */
  @Element() element;

  /**
   * Evento de mudança de valor
   */
  @Event() valueChange: EventEmitter<IValueChangeEvent>;

  /**
   * Fico escutando a mudança de valor do model
   * @param newValue 
   */
  @Watch("model")
  handleModelChange(newValue: TSelectValue | TSelectValue[]){
    this.atualizaMarcacaoLista();

    // Disparo evento de mudança de valor
    this.valueChange.emit({
      value: newValue
    });
  }

  /**
   * Chamada quando um item é clicado
   */
  handleItemClick(value: ISelectValue){
    // Se for uma lista múltipla, verifico se tiro ou adiciono do model
    // Senão, só atribuo o model com o novo valor
    if (this.multiple) {
      value.checked = !value.checked;
      const valueSelectOnModel = this.isSelected(value);
      
      // Se o item foi marcado e não está no model, eu adiciono no model
      if (value.checked && !valueSelectOnModel) {
        this.model = [...(this.model as TSelectValue[]), value.value];
      } 
      // Se o item foi desmarcado e está no model, removo do model
      else if (!value.checked && valueSelectOnModel) {
        const newModel = (this.model as TSelectValue[]).filter((modelValue) => {
          return modelValue != value.value;
        });
        this.model = [...newModel];
      }
    } else {
      this.model = value.value;
      
      //Na seleção normal eu fecho as opções
      this.isOpen = false;
    }
  }

  /**
   * Chamada quando o bloco do select é clicado
   * @param ev 
   */
  handleSelectBlockClick() {
    if (this.isOpen) {
      this.isOpen = false;
      this.element.querySelector('.btn-get-foco').blur();
    } else {
      setTimeout(() => {
        this.isOpen = true;
      });
    }
  }

  /**
   * Chamada quando o componente perde o foco
   */
  handleFocusout() {
    // Só valido a perda de foco caso Seja seleçao normal; Esteja aberto
    setTimeout(() => {
      if (!this.multiple && this.isOpen) {
        this.isOpen = false;
        this.element.querySelector('.btn-get-foco').blur();
      }
    }, 250);
  }

  /**
   * Chamada antes de renderizar elementos
   */
  componentWillRender(){
    this.atualizaMarcacaoLista();
  }

  componentDidUpdate(){
    if (this.isOpen) {
      this.element.querySelector('.btn-get-foco').focus();
    }
  }

  /**
   * Verifica se um valor está no model
   * @param value 
   */
  private isSelected(value: ISelectValue): boolean {
    // Se for uma lista múltipla, faço uma busca no array, senão só comparo o valor
    if (this.multiple) {
      return (this.model as TSelectValue[]).some((valueModel) => {
        return value.value == valueModel;
      });
    } else {
      return value.value == this.model;
    }
  }

  /**
   * Atualiza se os itens da lista estão marcados
   */
  private atualizaMarcacaoLista(){
    this.values.forEach((value) => {
      //Atualizo a lista, setando se o item está marcado
      value.checked = this.isSelected(value);
    });
  }

  /**
   * Retorna os itens selecionados na caixa de seleção.
   * Caso seja seleção multipla, retorna os itens separados por ","
   */
  private getSelectedNames(): string {
    if (this.multiple) {
      let retorno = '';

      this.values.filter((valueFind) => {
        return valueFind.checked;
      }).forEach((itemForeach, index) => {
        if (index > 0) {
          retorno += ', ';
        }

        retorno += itemForeach.name;
      });

      return retorno;
    } else {
      const itemSelected = this.values.find((valueFind) => {
        return valueFind.checked;
      });
      return (itemSelected != null) ? itemSelected.name : '';
    }
  }

  getCssClass(){
    return 'my-select'
      + (this.isOpen ? ' open' : '')
      + (this.multiple ? ' multiple' : ' normal');
  }

  getOptionCssClass(item: ISelectValue): string {
    return 'select-option' + (item.checked ? ' checked' : '');
  }

  getOptionsBlockCssClass(): string {
    return 'options-block' 
      + (this.multiple ? ' multiple' : ' normal');
  }

  render() {
    return (
      <div class={this.getCssClass()}>
        <label class="select-block">
          <div class="selected-value">
            <div class="value">{this.getSelectedNames()}</div>
          </div>
          <input type="text" class="btn-get-foco" 
            onClick={() => this.handleSelectBlockClick()}
            onBlur={() => this.handleFocusout()}/>
        </label>
        <div class={this.getOptionsBlockCssClass()}>
          {
            this.values.map((item: ISelectValue) => (
              <div class={this.getOptionCssClass(item)} onClick={() => this.handleItemClick(item)}>
                <div class="option-mark">
                </div>
                <div class="option-value">{item.name}</div>                
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export interface ISelectValue {
  checked?: boolean;
  value: TSelectValue;
  name: string;
}

export type TSelectValue = string | number | boolean;

export interface IValueChangeEvent {
  value: TSelectValue | TSelectValue[];
}