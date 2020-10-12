import { Component, EventEmitter, h, Prop, Watch, Event } from '@stencil/core';

@Component({
  tag: 'my-form',
  styleUrl: 'my-form.scss',
  scoped: true,
})
export class MyTabs {
  @Prop({mutable: true}) model: any = {};
  @Prop() campos: ICampoForm[] = [];

  /**
   * Evento de mudança de valor
   */
  @Event() valueChange: EventEmitter<any>;

  /**
   * Fico escutando a mudança de valor do model
   * @param newValue 
   */
  @Watch("model")
  handleModelChange(newValue: any){

    // Disparo evento de mudança de valor
    this.valueChange.emit({
      value: newValue
    });
  }

  componentDidLoad(){
    setTimeout(() => {
      this.model = {
        ...this.model,
        nome: 'Gian Henrique'
      };
    }, 5000);
  }

  getCssClass(){
    return 'my-form';
  }

  /**
   * Retorna o valo referente a um campo
   * @param nome 
   */
  getCampoValor(nome: string): any {
    return this.model[nome];
  }

  render() {
    return (
      <div class={this.getCssClass()}>
        {
            this.campos.map((campo: ICampoForm) => (            
              <div class="my-form-campo-container">
                { campo.tipo == 'custom'
                  ? <slot name={campo.nome} />
                  : <div class="my-form-campo">
                      {this.getCampoValor(campo.nome)}
                    </div>
                }
              </div>
            ))
          }
      </div>
    );
  }
}

export type TCampoFormTipo = 'input-text' | 'input-number' | 'dropdown' | 'dropdown-multiple' | 'custom';

export interface ICampoForm {
  nome: string;
  tipo: TCampoFormTipo;
  config?: any;
}