import { Component, h, Prop, Event, Watch, Element } from '@stencil/core';
export class MyRange {
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
    return (h("div", { class: this.getCssClass() },
      h("div", { class: "rotulo" }, this.rotulo),
      h("input", { type: "number", value: this.valor, placeholder: this.placeholder, onInput: (event) => this.onInputChange(event) }),
      h("div", { class: "range-container" },
        h("input", { type: "range", value: this.valor, name: "range", id: "", class: "range" }))));
  }
  static get is() { return "my-range"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["my-range.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["my-range.css"]
  }; }
  static get properties() { return {
    "valor": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "valor",
      "reflect": false
    },
    "rotulo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "rotulo",
      "reflect": false
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "placeholder",
      "reflect": false
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
        "text": ""
      },
      "complexType": {
        "original": "IValueChange",
        "resolved": "IValueChange",
        "references": {
          "IValueChange": {
            "location": "local"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "valor",
      "methodName": "valueChanged"
    }]; }
}
