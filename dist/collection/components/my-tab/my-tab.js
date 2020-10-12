import { Component, h, Prop, Event, Listen } from '@stencil/core';
export class MyTab {
  constructor() {
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
    return (h("div", { class: this.getCssClass() },
      h("slot", null)));
  }
  static get is() { return "my-tab"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["my-tab.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["my-tab.css"]
  }; }
  static get properties() { return {
    "name": {
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
      "attribute": "name",
      "reflect": false,
      "defaultValue": "\"Tab\""
    },
    "active": {
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
        "text": ""
      },
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "tabActivate",
      "name": "tabActivate",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "ITabActivateEvent",
        "resolved": "ITabActivateEvent",
        "references": {
          "ITabActivateEvent": {
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
