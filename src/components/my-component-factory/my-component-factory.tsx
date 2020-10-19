import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component-factory',
  styleUrl: 'my-component-factory.scss',
  scoped: true,
})
export class MyComponentFactory {
  /**
   * Propriedades do componente retornado
   */
  @Prop() propriedades: any = {};

  /**
   * Eventos do componente retornado
   */
  @Prop() eventos: any = {};

  /**
   * Eventos do componente retornado
   */
  @Prop() arrConfig: IConfigComponenteFactory[] = [];

  /**
   * tipo de componente desejado
   */
  @Prop() tipo: number;

  /**
   * Monta e retorna componente de acordo com a configuração do tipo informado
   */
  getComponente(){
    // Tag do componente
    let tagName;
    // Propriedades do componente
    let propriedades: any = this.propriedades
    // Eventos do componente
    let eventos: any = this.eventos;

    // Busco configuração sobre o componente desejado
    const config = this.arrConfig.find((configFind) => {
      return configFind.tipo == this.tipo;
    });

    // Se não encontrou configuração, retorno vazio
    if (!config) {
      return null;
    }

    // Defino a tag do componente
    tagName = config.tag;

    // Retorno componente montado
    return <my-custom-component 
      tag={tagName} 
      propriedades={propriedades} 
      eventos={eventos} >
    </my-custom-component>
  }

  render() {
    return this.getComponente();
  }
}

/**
 * Interface de configuração do componente no factory de componentes
 */
export interface IConfigComponenteFactory {
  /**
   * Identificador do tipo de componente desejado
   */
  tipo: number;
  /**
   * Tag do componente a ser gerado
   */
  tag: string;
}