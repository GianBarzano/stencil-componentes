import { Component, h, Prop, State, Event, EventEmitter, Listen } from '@stencil/core';

export interface IHidedEvent {
  when: Date;

}
@Component({
  tag: 'my-alert',
  styleUrl: 'my-alert.scss',
  scoped: true,
})
export class MyAlert {
  @Prop() text: string = "This is an almost important alert!";
  @Prop() kind: "info" | "success" | "error" = "info";
  @State() hide: boolean = false;
  @Event() onhided: EventEmitter<IHidedEvent>;

  componentDidLoad(){
    console.log("Alert load");
  }
  componentDidUpdate(){
    console.log("Alert update");
  }

  /**
   * Chamado quando o botão for clicado
   */
  @Listen("click")
  onClick() {
    this.hide = !this.hide;
    this.onhided.emit({
      when: new Date()
    });
  }

  getCssClass(): string {
    return this.kind + (this.hide ? ' hide' : '');
  }

  render() {
    return (
      <p class={this.getCssClass()}>
        {this.text}
      </p>
    );
  }
}
