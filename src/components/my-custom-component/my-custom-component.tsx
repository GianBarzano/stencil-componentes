import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-custom-component',
  styleUrl: 'my-custom-component.scss',
  scoped: true,
})
export class MyCustomComponent {
  /**
   * Tag do componente retornado
   */
  @Prop() tag: string;

  /**
   * Propriedades do componente retornado
   */
  @Prop() propriedades: any;

  /**
   * Eventos do componente retornado
   */
  @Prop() eventos: any;

  render() {
    const TagName = this.tag;
    return <TagName {...this.propriedades} {...this.eventos}></TagName>
  }
}
