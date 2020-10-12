import { Component, h, Prop, State, Event, Listen } from '@stencil/core';
export class MyAlert {
  constructor() {
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
    return (h("p", { class: this.getCssClass() }, this.text));
  }
  static get is() { return "my-alert"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["my-alert.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["my-alert.css"]
  }; }
  static get properties() { return {
    "text": {
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
      "attribute": "text",
      "reflect": false,
      "defaultValue": "\"This is an almost important alert!\""
    },
    "kind": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"info\" | \"success\" | \"error\"",
        "resolved": "\"error\" | \"info\" | \"success\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "kind",
      "reflect": false,
      "defaultValue": "\"info\""
    }
  }; }
  static get states() { return {
    "hide": {}
  }; }
  static get events() { return [{
      "method": "onhided",
      "name": "onhided",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "IHidedEvent",
        "resolved": "IHidedEvent",
        "references": {
          "IHidedEvent": {
            "location": "local"
          }
        }
      }
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "onClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
