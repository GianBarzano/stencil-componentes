import { Component, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';

export interface ITabActivateEvent {
  name: string;
}
@Component({
  tag: 'my-tab',
  styleUrl: 'my-tab.scss',
  scoped: true,
})
export class MyTab {
  @Prop() name: string = "Tab";
  @Prop() active: boolean = false;
  @Event() tabActivate: EventEmitter<ITabActivateEvent>;

  @Listen("click")
  onClick(){
    this.active = true;
    this.tabActivate.emit({
      name: this.name
    });
  }

  getCssClass(){
    return 'my-tab' + (this.active ? ' active' : '');
  }

  render() {
    return (
      <div class={this.getCssClass()}>
        <slot/>
      </div>
    );
  }
}
