import { Component, h, Prop, Watch, Event } from '@stencil/core';
export class MyTabs {
  constructor() {
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
    return (h("div", { class: this.getCssClass() }, this.campos.map((campo) => (h("div", { class: "my-form-campo-container" }, campo.tipo == 'custom'
      ? h("slot", { name: campo.nome })
      : h("div", { class: "my-form-campo" }, this.getCampoValor(campo.nome)))))));
  }
  static get is() { return "my-form"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["my-form.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["my-form.css"]
  }; }
  static get properties() { return {
    "model": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "model",
      "reflect": false,
      "defaultValue": "{}"
    },
    "campos": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ICampoForm[]",
        "resolved": "ICampoForm[]",
        "references": {
          "ICampoForm": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    }
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
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "model",
      "methodName": "handleModelChange"
    }]; }
}
