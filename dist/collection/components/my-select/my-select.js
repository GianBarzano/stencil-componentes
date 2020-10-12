import { Component, h, Prop, Watch, Event, State, Element } from '@stencil/core';
export class MySelect {
  constructor() {
    /**
     * Define se é um Select comum, ou com múltipla seleção
     */
    this.multiple = false;
    /**
     * Valor selecionado. Pode ser um valor comum, ou uma lista de valores no caso
     */
    this.model = null;
    /**
     * Lista utilizada para apresentar dados na tela
     */
    this.values = [];
    /**
     * Define se as opções aparecem ou não
     */
    this.isOpen = false;
  }
  /**
   * Fico escutando a mudança de valor do model
   * @param newValue
   */
  handleModelChange(newValue) {
    this.atualizaMarcacaoLista();
    // Disparo evento de mudança de valor
    this.valueChange.emit({
      value: newValue
    });
  }
  /**
   * Chamada quando um item é clicado
   */
  handleItemClick(value) {
    // Se for uma lista múltipla, verifico se tiro ou adiciono do model
    // Senão, só atribuo o model com o novo valor
    if (this.multiple) {
      value.checked = !value.checked;
      const valueSelectOnModel = this.isSelected(value);
      // Se o item foi marcado e não está no model, eu adiciono no model
      if (value.checked && !valueSelectOnModel) {
        this.model = [...this.model, value.value];
      }
      // Se o item foi desmarcado e está no model, removo do model
      else if (!value.checked && valueSelectOnModel) {
        const newModel = this.model.filter((modelValue) => {
          return modelValue != value.value;
        });
        this.model = [...newModel];
      }
    }
    else {
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
    }
    else {
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
  componentWillRender() {
    this.atualizaMarcacaoLista();
  }
  componentDidUpdate() {
    if (this.isOpen) {
      this.element.querySelector('.btn-get-foco').focus();
    }
  }
  /**
   * Verifica se um valor está no model
   * @param value
   */
  isSelected(value) {
    // Se for uma lista múltipla, faço uma busca no array, senão só comparo o valor
    if (this.multiple) {
      return this.model.some((valueModel) => {
        return value.value == valueModel;
      });
    }
    else {
      return value.value == this.model;
    }
  }
  /**
   * Atualiza se os itens da lista estão marcados
   */
  atualizaMarcacaoLista() {
    this.values.forEach((value) => {
      //Atualizo a lista, setando se o item está marcado
      value.checked = this.isSelected(value);
    });
  }
  /**
   * Retorna os itens selecionados na caixa de seleção.
   * Caso seja seleção multipla, retorna os itens separados por ","
   */
  getSelectedNames() {
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
    }
    else {
      const itemSelected = this.values.find((valueFind) => {
        return valueFind.checked;
      });
      return (itemSelected != null) ? itemSelected.name : '';
    }
  }
  getCssClass() {
    return 'my-select'
      + (this.isOpen ? ' open' : '')
      + (this.multiple ? ' multiple' : ' normal');
  }
  getOptionCssClass(item) {
    return 'select-option' + (item.checked ? ' checked' : '');
  }
  getOptionsBlockCssClass() {
    return 'options-block'
      + (this.multiple ? ' multiple' : ' normal');
  }
  render() {
    return (h("div", { class: this.getCssClass() },
      h("label", { class: "select-block" },
        h("div", { class: "selected-value" },
          h("div", { class: "value" }, this.getSelectedNames())),
        h("input", { type: "text", class: "btn-get-foco", onClick: () => this.handleSelectBlockClick(), onBlur: () => this.handleFocusout() })),
      h("div", { class: this.getOptionsBlockCssClass() }, this.values.map((item) => (h("div", { class: this.getOptionCssClass(item), onClick: () => this.handleItemClick(item) },
        h("div", { class: "option-mark" }),
        h("div", { class: "option-value" }, item.name)))))));
  }
  static get is() { return "my-select"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["my-select.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["my-select.css"]
  }; }
  static get properties() { return {
    "multiple": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define se \u00E9 um Select comum, ou com m\u00FAltipla sele\u00E7\u00E3o"
      },
      "attribute": "multiple",
      "reflect": false,
      "defaultValue": "false"
    },
    "model": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "TSelectValue | TSelectValue[]",
        "resolved": "TSelectValue[] | boolean | number | string",
        "references": {
          "TSelectValue": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Valor selecionado. Pode ser um valor comum, ou uma lista de valores no caso"
      },
      "attribute": "model",
      "reflect": false,
      "defaultValue": "null"
    },
    "values": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "ISelectValue[]",
        "resolved": "ISelectValue[]",
        "references": {
          "ISelectValue": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Lista utilizada para apresentar dados na tela"
      },
      "defaultValue": "[]"
    }
  }; }
  static get states() { return {
    "isOpen": {}
  }; }
  static get events() { return [{
      "method": "valueChange",
      "name": "valueChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Evento de mudan\u00E7a de valor"
      },
      "complexType": {
        "original": "IValueChangeEvent",
        "resolved": "IValueChangeEvent",
        "references": {
          "IValueChangeEvent": {
            "location": "local"
          }
        }
      }
    }]; }
  static get elementRef() { return "element"; }
  static get watchers() { return [{
      "propName": "model",
      "methodName": "handleModelChange"
    }]; }
}
