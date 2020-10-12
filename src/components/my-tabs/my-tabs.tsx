import { Component, h, Prop, Listen, Element, Watch } from '@stencil/core';
import { ITabActivateEvent, MyTab } from '../my-tab/my-tab';

@Component({
  tag: 'my-tabs',
  styleUrl: 'my-tabs.scss',
  scoped: true,
})
export class MyTabs {
  @Prop({mutable: true}) activeTab: string;
  @Watch("activeTab")
  handleActiveTabChange(newValue: string){
    const headings = this.getHeadings();
    
    headings.forEach((heading: MyTab) => {
      heading.active = (heading.name == newValue);
    });
  }

  @Element() element;
  
  /**
   * Chamado quando uma tab filha fica ativa
   * @param e 
   */
  @Listen("tabActivate")
  tabChildActivate(e: CustomEvent<ITabActivateEvent>){
    this.activeTab = e.detail.name;
  }

  componentDidLoad(){
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
    } else {
      this.handleActiveTabChange(this.activeTab);
    }
  }

  /**
   * Retorna lista de MyTab filhas
   */
  private getHeadings(): MyTab[]{
    const headings: MyTab[] = [].slice.call(this.element.querySelector('.my-tabs').children)
      .filter((child: Element) => {
        return child.tagName.toLowerCase() === 'my-tab';
      });
    
    return headings;
  }

  getCssClass(){
    return 'my-tabs';
  }

  render() {
    return (
      <div class={this.getCssClass()}>
        <slot/>
      </div>
    );
  }
}
