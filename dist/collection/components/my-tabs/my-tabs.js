import { Component, h, Prop, Listen, Element, Watch } from '@stencil/core';
export class MyTabs {
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
    return (h("div", { class: this.getCssClass() },
      h("slot", null)));
  }
  static get is() { return "my-tabs"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["my-tabs.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["my-tabs.css"]
  }; }
  static get properties() { return {
    "activeTab": {
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
      "attribute": "active-tab",
      "reflect": false
    }
  }; }
  static get elementRef() { return "element"; }
  static get watchers() { return [{
      "propName": "activeTab",
      "methodName": "handleActiveTabChange"
    }]; }
  static get listeners() { return [{
      "name": "tabActivate",
      "method": "tabChildActivate",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
