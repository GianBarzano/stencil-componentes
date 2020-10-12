'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2b6c5b82.js');

const myAlertCss = ".sc-my-alert-h{display:block}p.sc-my-alert{line-height:1.5;padding:8px 15px;border:1px solid transparent;font-size:14px;font-family:sans-serif}p.info.sc-my-alert{background-color:#e6f7ff;border-color:#91d5ff}p.success.sc-my-alert{background-color:#f6ffed;border-color:#b7eb8f}p.error.sc-my-alert{background-color:#fff1f0;border-color:#ffa39e}p.hide.sc-my-alert{display:none}";

const MyAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onhided = index.createEvent(this, "onhided", 7);
    this.text = "This is an almost important alert!";
    this.kind = "info";
    this.hide = false;
  }
  componentDidLoad() {
    console.log("Alert load");
  }
  componentDidUpdate() {
    console.log("Alert update");
  }
  /**
   * Chamado quando o botão for clicado
   */
  onClick() {
    this.hide = !this.hide;
    this.onhided.emit({
      when: new Date()
    });
  }
  getCssClass() {
    return this.kind + (this.hide ? ' hide' : '');
  }
  render() {
    return (index.h("p", { class: this.getCssClass() }, this.text));
  }
};
MyAlert.style = myAlertCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

const myFormCss = ".sc-my-form-h{display:block}";

const MyTabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChange = index.createEvent(this, "valueChange", 7);
    this.model = {};
    this.campos = [];
  }
  /**
   * Fico escutando a mudança de valor do model
   * @param newValue
   */
  handleModelChange(newValue) {
    // Disparo evento de mudança de valor
    this.valueChange.emit({
      value: newValue
    });
  }
  componentDidLoad() {
    setTimeout(() => {
      this.model = Object.assign(Object.assign({}, this.model), { nome: 'Gian Henrique' });
    }, 5000);
  }
  getCssClass() {
    return 'my-form';
  }
  /**
   * Retorna o valo referente a um campo
   * @param nome
   */
  getCampoValor(nome) {
    return this.model[nome];
  }
  render() {
    return (index.h("div", { class: this.getCssClass() }, this.campos.map((campo) => (index.h("div", { class: "my-form-campo-container" }, campo.tipo == 'custom'
      ? index.h("slot", { name: campo.nome })
      : index.h("div", { class: "my-form-campo" }, this.getCampoValor(campo.nome)))))));
  }
  static get watchers() { return {
    "model": ["handleModelChange"]
  }; }
};
MyTabs.style = myFormCss;

const myInputCss = ".sc-my-input-h{display:block;font-family:\"Montserrat\", \"Regular\", sans-serif, serif, inherit}input.sc-my-input{border:none;border-bottom:1px solid #CBCBCB;color:black;font-size:15px;max-width:100%}.placeholder-ativo.sc-my-input input.sc-my-input{font-size:14px;color:#78719A}.my-input-container.sc-my-input input.sc-my-input:focus{border-bottom:1px solid #413872}.my-input-container.com-erros.sc-my-input input.sc-my-input:focus{border-bottom:1px solid #F03e41}.rotulo.sc-my-input{font-size:12px;color:#78719A}.placeholder-ativo.sc-my-input .rotulo.sc-my-input{display:none}";

const MyInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChange = index.createEvent(this, "valueChange", 7);
  }
  // propagate value change from model to view
  valueChanged() {
    const inputEl = this.el.querySelector('input');
    // only update if model and view differ 
    if (inputEl.value !== this.valor) {
      inputEl.value = this.valor;
    }
  }
  /**
   * Retorna a classe da div container principal do componente
   */
  getCssClass() {
    return 'my-input-container' + (this.valor == "" ? ' placeholder-ativo' : '');
  }
  /**
   * Chamado quando o input é alterado
   * @param event
   */
  onInputChange(event) {
    this.valor = event.target.value;
    this.valueChange.emit({ valor: this.valor });
  }
  render() {
    return (index.h("div", { class: this.getCssClass() }, index.h("div", { class: "rotulo" }, this.rotulo), index.h("input", { type: "text", value: this.valor, placeholder: this.placeholder, onInput: (event) => this.onInputChange(event) })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "valor": ["valueChanged"]
  }; }
};
MyInput.style = myInputCss;

const myRangeCss = ".sc-my-range-h{display:block;font-family:\"Montserrat\", \"Regular\", sans-serif, serif, inherit}input.sc-my-range{border:none;border-bottom:1px solid #CBCBCB;color:black;font-size:15px;max-width:100%}.placeholder-ativo.sc-my-range input.sc-my-range{font-size:14px;color:#78719A}.my-input-container.sc-my-range input.sc-my-range:focus{border-bottom:1px solid #413872}.my-input-container.com-erros.sc-my-range input.sc-my-range:focus{border-bottom:1px solid #F03e41}.rotulo.sc-my-range{font-size:12px;color:#78719A}.placeholder-ativo.sc-my-range .rotulo.sc-my-range{display:none}";

const MyRange = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChange = index.createEvent(this, "valueChange", 7);
  }
  // propagate value change from model to view
  valueChanged() {
    const inputEl = this.el.querySelector('input');
    // only update if model and view differ 
    if (inputEl.value !== this.valor) {
      inputEl.value = this.valor;
    }
  }
  /**
   * Retorna a classe da div container principal do componente
   */
  getCssClass() {
    return 'my-input-container' + (this.valor == "" ? ' placeholder-ativo' : '');
  }
  /**
   * Chamado quando o input é alterado
   * @param event
   */
  onInputChange(event) {
    this.valor = event.target.value;
    this.valueChange.emit({ valor: this.valor });
  }
  render() {
    return (index.h("div", { class: this.getCssClass() }, index.h("div", { class: "rotulo" }, this.rotulo), index.h("input", { type: "number", value: this.valor, placeholder: this.placeholder, onInput: (event) => this.onInputChange(event) }), index.h("div", { class: "range-container" }, index.h("input", { type: "range", value: this.valor, name: "range", id: "", class: "range" }))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "valor": ["valueChanged"]
  }; }
};
MyRange.style = myRangeCss;

const mySelectCss = ".sc-my-select-h{display:block}.my-select.sc-my-select{display:block;max-width:250px}.my-select.sc-my-select .select-block.sc-my-select{display:block;position:relative;height:25px;border-bottom:2px solid #aa62f2;padding:3px 20px 3px 0}.my-select.sc-my-select .select-block.sc-my-select:after{pointer-events:none;content:\"\";position:absolute;top:10px;right:2px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;z-index:9;border-top:8px solid #271235}.my-select.sc-my-select .select-block.sc-my-select .selected-value.sc-my-select{display:block}.my-select.sc-my-select .select-block.sc-my-select .selected-value.sc-my-select .value.sc-my-select{word-break:break-all;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.my-select.sc-my-select .select-block.sc-my-select .btn-get-foco.sc-my-select{position:absolute;float:left;width:0;height:0;opacity:0}.my-select.sc-my-select .options-block.sc-my-select{display:none;background-color:#f2f0f0}.my-select.sc-my-select .options-block.sc-my-select .select-option.sc-my-select{padding:12px 10px;margin:3px 0;cursor:pointer}.my-select.sc-my-select .options-block.sc-my-select .select-option.checked.sc-my-select{background-color:#f2f2f2}.my-select.sc-my-select .options-block.normal.sc-my-select{border-bottom-left-radius:4px;border-bottom-right-radius:4px;background-color:white;-webkit-box-shadow:0px 5px 16px -8px rgba(0, 0, 0, 0.75);-moz-box-shadow:0px 5px 16px -8px rgba(0, 0, 0, 0.75);box-shadow:0px 5px 16px -8px rgba(0, 0, 0, 0.75)}.my-select.sc-my-select .options-block.normal.sc-my-select .select-option.sc-my-select .option-mark.sc-my-select input.sc-my-select{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.my-select.sc-my-select .options-block.multiple.sc-my-select .select-option.sc-my-select{display:flex;align-items:center}.my-select.sc-my-select .options-block.multiple.sc-my-select .select-option.sc-my-select .option-mark.sc-my-select{height:10px;width:10px;border:1px solid black;margin-right:5px}.my-select.sc-my-select .options-block.multiple.sc-my-select .select-option.checked.sc-my-select .option-mark.sc-my-select{background-color:seagreen}.my-select.open.sc-my-select .select-block.sc-my-select:after{border-top:8px solid #271235;-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);transform:rotate(180deg)}.my-select.open.sc-my-select .options-block.sc-my-select{display:block}";

const MySelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.valueChange = index.createEvent(this, "valueChange", 7);
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
    return (index.h("div", { class: this.getCssClass() }, index.h("label", { class: "select-block" }, index.h("div", { class: "selected-value" }, index.h("div", { class: "value" }, this.getSelectedNames())), index.h("input", { type: "text", class: "btn-get-foco", onClick: () => this.handleSelectBlockClick(), onBlur: () => this.handleFocusout() })), index.h("div", { class: this.getOptionsBlockCssClass() }, this.values.map((item) => (index.h("div", { class: this.getOptionCssClass(item), onClick: () => this.handleItemClick(item) }, index.h("div", { class: "option-mark" }), index.h("div", { class: "option-value" }, item.name)))))));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "model": ["handleModelChange"]
  }; }
};
MySelect.style = mySelectCss;

const myTabCss = ".sc-my-tab-h{display:block}.my-tab.sc-my-tab{padding:12px 16px;cursor:pointer}.my-tab.active.sc-my-tab{color:#1890ff;font-weight:500;border-bottom:2px solid #1890ff}";

const MyTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.tabActivate = index.createEvent(this, "tabActivate", 7);
    this.name = "Tab";
    this.active = false;
  }
  onClick() {
    this.active = true;
    this.tabActivate.emit({
      name: this.name
    });
  }
  getCssClass() {
    return 'my-tab' + (this.active ? ' active' : '');
  }
  render() {
    return (index.h("div", { class: this.getCssClass() }, index.h("slot", null)));
  }
};
MyTab.style = myTabCss;

const myTabsCss = ".sc-my-tabs-h{display:block}.my-tabs.sc-my-tabs{display:flex}";

const MyTabs$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  handleActiveTabChange(newValue) {
    const headings = this.getHeadings();
    headings.forEach((heading) => {
      heading.active = (heading.name == newValue);
    });
  }
  /**
   * Chamado quando uma tab filha fica ativa
   * @param e
   */
  tabChildActivate(e) {
    this.activeTab = e.detail.name;
  }
  componentDidLoad() {
    if (this.activeTab === undefined) {
      const headings = this.getHeadings();
      const activeHeadings = headings.filter((tab) => {
        return tab.active;
      });
      // Se nenhuma tab estiver ativa, deixo a primeira ativa
      if (headings.length > 0 && activeHeadings.length == 0) {
        this.activeTab = headings[0].name;
      }
      // Se tiver mais de uma tab ativa, deixo somente uma ativa
      else if (activeHeadings.length > 1) {
        this.activeTab = activeHeadings[0].name;
      }
    }
    else {
      this.handleActiveTabChange(this.activeTab);
    }
  }
  /**
   * Retorna lista de MyTab filhas
   */
  getHeadings() {
    const headings = [].slice.call(this.element.querySelector('.my-tabs').children)
      .filter((child) => {
      return child.tagName.toLowerCase() === 'my-tab';
    });
    return headings;
  }
  getCssClass() {
    return 'my-tabs';
  }
  render() {
    return (index.h("div", { class: this.getCssClass() }, index.h("slot", null)));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "activeTab": ["handleActiveTabChange"]
  }; }
};
MyTabs$1.style = myTabsCss;

exports.my_alert = MyAlert;
exports.my_component = MyComponent;
exports.my_form = MyTabs;
exports.my_input = MyInput;
exports.my_range = MyRange;
exports.my_select = MySelect;
exports.my_tab = MyTab;
exports.my_tabs = MyTabs$1;
