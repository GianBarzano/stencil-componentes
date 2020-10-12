import { Component, h, Prop, Event, EventEmitter, Watch, Element } from '@stencil/core';

export interface IValueChange {
  valor: string;

}
@Component({
  tag: 'my-input',
  styleUrl: 'my-input.scss',
  scoped: true,
})
export class MyInput {
  @Prop({mutable: true}) valor: string;
  @Prop() rotulo: string;
  @Prop() placeholder: string;
  @Event() valueChange: EventEmitter<IValueChange>;
  @Element() el;
  
  // propagate value change from model to view
  @Watch('valor')
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
  getCssClass(): string {
    return 'my-input-container' + (this.valor == "" ? ' placeholder-ativo' : '');
  }

  /**
   * Chamado quando o input é alterado
   * @param event 
   */
  onInputChange(event){
    this.valor = event.target.value;
    this.valueChange.emit({ valor: this.valor});
  }

  render() {
    return (
      <div class={this.getCssClass()}>
        <div class="rotulo">{this.rotulo}</div>
        <input type="text" value={this.valor} placeholder={this.placeholder} onInput={(event) => this.onInputChange(event)}/>
      </div>
    );
  }
}
