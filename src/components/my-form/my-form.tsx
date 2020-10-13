import { Component, EventEmitter, h, Prop, Watch, Event, State, Element } from '@stencil/core';
import { IConfigComponenteFactory } from '../my-component-factory/my-component-factory';

@Component({
  tag: 'my-form',
  styleUrl: 'my-form.scss',
  scoped: true,
})
export class MyForm {
  @Prop() componentFactoryTag: string = 'my-component-factory';
  /**
   * Array de configurações da fabricação de componentes do formulário
   */
  @Prop() arrConfigComponentes: IConfigComponenteFactory[]  = [];
  /**
   * Objeto com a fonte de dados do formulário
   */
  @Prop({mutable: true}) model: any = {};
  /**
   * Array de configuração dos campos que serão apresentados no formulário
   */
  @Prop() campos: ICampoForm[] = [];

  /**
   * Evento de mudança de valor do formulário
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
  @Element() element;

  //Propriedades de simulação
  @Prop({mutable: true}) oInputConfiguracaoSimulacao: IConfiguracaoSimulacao = {
    vrInvestimentoInicial: 2000,
    vrCota: 115,
    vrInvestimentoMensal: 700,
    vrDividendo: 0.7,
    blReinvestirDividendos: false,
    blReinvestirDividendosInvestimentoMensalCoberto: true,
    qtdMeses: (26 * 12) // Ano x Meses
  };

  @State() oSimulacao: ISimulacao;

  componentWillLoad(){
    // this.criarSimulacao();
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

  /**
   * Gera a simulação e apresenta na tela
   */
  criarSimulacao(){
    // Crio objeto de simulação
    let oSimulacao: ISimulacao = {
      oConfiguracao: {
          vrInvestimentoInicial: this.oInputConfiguracaoSimulacao.vrInvestimentoInicial,
          vrCota: this.oInputConfiguracaoSimulacao.vrCota,
          vrInvestimentoMensal: this.oInputConfiguracaoSimulacao.vrInvestimentoMensal,
          vrDividendo: this.oInputConfiguracaoSimulacao.vrDividendo,
          blReinvestirDividendos: this.oInputConfiguracaoSimulacao.blReinvestirDividendos,
          blReinvestirDividendosInvestimentoMensalCoberto: this.oInputConfiguracaoSimulacao.blReinvestirDividendosInvestimentoMensalCoberto,
          qtdMeses: this.oInputConfiguracaoSimulacao.qtdMeses
      },
      arrSimulacaoitens: []
    }

    // Crio os itens da simulação(Dados representando o estado do investimento por mês)
    for (let index = 0; index < oSimulacao.oConfiguracao.qtdMeses; index++) {
      let simulacaoItemAnterior: ISimulacaoItem = null;

      if (index > 0) {
          simulacaoItemAnterior = oSimulacao.arrSimulacaoitens[index-1];
      }

      let simulacaoItem: ISimulacaoItem = {
          mes: index + 1,
          vrFFI: 0,
          vrRendimentoDividendo: 0,
          vrInvestimentoMesTotal: 0,
          vrInvestimentoMesSobra: 0,
          vrRendimentoSobra: 0,
          qtdCotasCompradasMes: 0,
          qtdCotasTotal: 0
      }

      // Busco o valor para investir no mês, baseado na configuração
      let valorParaInvestir = oSimulacao.oConfiguracao.vrInvestimentoMensal;
      
      // Se for o primeiro mês, o valor para investir será o que foi definido para o investimento inicial
      if (simulacaoItem.mes == 1) {
        valorParaInvestir = oSimulacao.oConfiguracao.vrInvestimentoInicial;
      }

      // Defino se vou reinvestir o valor do rendimento dos dividendos
      let blReinvestirDividendos = oSimulacao.oConfiguracao.blReinvestirDividendos;

      if (simulacaoItemAnterior != null) {
          // Calculo quanto o rendimento do mês passado rendeu esse mês
          simulacaoItem.vrRendimentoDividendo = oSimulacao.oConfiguracao.vrDividendo * simulacaoItemAnterior.qtdCotasTotal;
          // Seto o valor do FFI no mês passado.
          simulacaoItem.vrFFI = simulacaoItemAnterior.vrFFI;
          // Adiciono a sobra do mês passado ao valor para investir no mês atual
          valorParaInvestir += simulacaoItemAnterior.vrInvestimentoMesSobra;
          // Seto o valor de sobra dos rendimentos: sobra de rendimentos do mês anterior + rendimento do mês atual
          simulacaoItem.vrRendimentoSobra = simulacaoItemAnterior.vrRendimentoSobra + simulacaoItem.vrRendimentoDividendo;
          // Seto o valor total de cotas até o momento
          simulacaoItem.qtdCotasTotal = simulacaoItemAnterior.qtdCotasTotal;

          // Defino se vou reinvestir o valor do rendimento dos dividendos
          blReinvestirDividendos = blReinvestirDividendos || (
            oSimulacao.oConfiguracao.blReinvestirDividendosInvestimentoMensalCoberto &&
            simulacaoItem.vrRendimentoDividendo < oSimulacao.oConfiguracao.vrInvestimentoMensal
          );
            
          // Caso esteja configurado para reinvestir dividendos, adiciono ao valor para investir no mês atual 
          if (blReinvestirDividendos) {
              valorParaInvestir += simulacaoItem.vrRendimentoSobra;
          }
      }

      // Seto quantas cotas estou comprando este mês
      simulacaoItem.qtdCotasCompradasMes = Math.floor(valorParaInvestir / oSimulacao.oConfiguracao.vrCota);
      // Incremento total de cotas com as cotas compradas no mês
      simulacaoItem.qtdCotasTotal += simulacaoItem.qtdCotasCompradasMes;
      // Seto o valor que foi investido no mês: Cotas compradas * valor da cota
      simulacaoItem.vrInvestimentoMesTotal = simulacaoItem.qtdCotasCompradasMes * oSimulacao.oConfiguracao.vrCota;
      // Incremento o valor do FII, adicionando o valor investido no mês
      simulacaoItem.vrFFI += simulacaoItem.vrInvestimentoMesTotal;

      // Sobra total do investimento do mês
      let valorParaInvestirSobra = valorParaInvestir - simulacaoItem.vrInvestimentoMesTotal;

      // Caso esteja configurado para reinvestir dividendos, redefino o valor que sobrou do saldo de dividendos
      if (blReinvestirDividendos) {
          if (valorParaInvestirSobra <= simulacaoItem.vrRendimentoSobra) {
              simulacaoItem.vrRendimentoSobra = valorParaInvestirSobra;
              valorParaInvestirSobra = 0;
          } else {
              valorParaInvestirSobra -= simulacaoItem.vrRendimentoSobra;
          }
      }

      // Seto a sobra do valor que está configurado para investimento mensal
      simulacaoItem.vrInvestimentoMesSobra = valorParaInvestirSobra;

      // Arredondo valores
      simulacaoItem.vrFFI = parseFloat(simulacaoItem.vrFFI.toFixed(2));
      simulacaoItem.vrInvestimentoMesSobra = parseFloat(simulacaoItem.vrInvestimentoMesSobra.toFixed(2));
      simulacaoItem.vrInvestimentoMesTotal = parseFloat(simulacaoItem.vrInvestimentoMesTotal.toFixed(2));
      simulacaoItem.vrRendimentoDividendo = parseFloat(simulacaoItem.vrRendimentoDividendo.toFixed(2));
      simulacaoItem.vrRendimentoSobra = parseFloat(simulacaoItem.vrRendimentoSobra.toFixed(2));
      
      // Adiciono item ao array de simulação
      oSimulacao.arrSimulacaoitens.push(simulacaoItem);
    }

    // Seto minha simulação na tela
    this.oSimulacao = oSimulacao;
  }

  /**
   * Retorna o componente de acordo com o tipo do campo
   */
  getComponente(campo: ICampoForm){
    // Se for campo customizado, retorno o slot com o nome do campo.
    if (campo.customizado) {
      return <slot name={campo.nome} />
    }

    // Propriedades do componente
    let propriedades: any = {
      ...(campo.config && campo.config.propriedades || {}),
      [campo.campoModel]: this.getCampoValor(campo.nome)
    }
    // Eventos do componente
    let eventos: any = {
      ...(campo.config && campo.config.eventos || {}),
    };

    // Se o campo tiver função de change, configuro para atualizar entidade do formulário
    if (campo.config && campo.config.eventoChangeName) {
      // Salvo evento original para chamar depois
      let originalOnValueChange;
      const arrKeys = Object.keys(eventos);
      for (let index = 0; index < arrKeys.length; index++) {
        const evento = eventos[arrKeys[index]];

        if (evento.name == campo.config.eventoChangeName) {
          originalOnValueChange = evento;
          break;
        }
      }
      
      // Atribuo o evento de atualização ao evento do formulário
      eventos[campo.config.eventoChangeName] = (ev) => this.handleChildOnValueChange(
        ev, campo.nome, campo.config.eventoChangeValueField, originalOnValueChange, campo.config.eventoChangeParams
      );
    }

    const TagFactory = this.componentFactoryTag;
    return <TagFactory 
      tipo={campo.tipo}
      arrConfig={this.arrConfigComponentes}
      propriedades={propriedades} 
      eventos={eventos} 
    />
  }

  /**
   * Controla a atualização de dados da entidade do formulário, quando a informação de algum componente muda
   * @param ev 
   * @param childName 
   * @param eventoChangeValueField 
   * @param handleOriginal 
   * @param handleOriginalParams 
   */
  handleChildOnValueChange(ev, childName, eventoChangeValueField = 'value', handleOriginal = null, handleOriginalParams = {}) {
    if (!eventoChangeValueField) {
      eventoChangeValueField = 'value';
    }

    const detail = ev.detail;

    this.model[childName] = detail[eventoChangeValueField];
    // Impeço que o evento continue sendo disparado para quem estiver ouvindo.
    ev.stopPropagation();

    // Se foi configurado um evento para mudança do valor do campo, eu chamo.
    if (handleOriginal) {
      handleOriginal({...handleOriginalParams, ev});
    }

    // Forço atualização do model
    this.model = {...this.model};
  }
  
  /**
   * Renderiza o componente
   */
  render() {
    return (
      <div class={this.getCssClass()}>
        {
            this.campos.map((campo: ICampoForm) => (            
              <div class={"my-form-campo-container " + campo.nome}>
                { this.getComponente(campo) }
                {
                  campo.tipo != 0 ? null : 
                    <div class="table-container">
                      <table>
                        <thead>
                          <th class="tipo-qtd">Mês</th>
                          <th class="tipo-valor">Total(FII)</th>
                          <th class="tipo-qtd">Total(Cotas)</th>
                          <th class="tipo-valor">Rend. Dividendo</th>
                          <th class="tipo-qtd">Invest. Mês(Cotas)</th>
                          <th class="tipo-valor">Invest. Mês(R$)</th>
                          <th class="tipo-valor">Sobra Rend. Disp.</th>
                          <th class="tipo-valor">Sobra Invest. Mês</th>
                        </thead>
                        <tbody>
                          { this.oSimulacao.arrSimulacaoitens.map((item: ISimulacaoItem) => (
                            <tr class="simulacao-item">
                              <td class="tipo-qtd">{item.mes}</td>
                              <td class="tipo-valor">{item.vrFFI}</td>
                              <td class="tipo-qtd">{item.qtdCotasTotal}</td>
                              <td class="tipo-valor">{item.vrRendimentoDividendo}</td>
                              <td class="tipo-qtd">{item.qtdCotasCompradasMes}</td>
                              <td class="tipo-valor">{item.vrInvestimentoMesTotal}</td>
                              <td class="tipo-valor">{item.vrRendimentoSobra}</td>
                              <td class="tipo-valor">{item.vrInvestimentoMesSobra}</td>
                            </tr>
                          ))
                          
                          }
                        </tbody>
                      </table>
                    </div>
                }
              </div>
            ))
          }
      </div>
    );
  }
}

export type TCampoFormTipo = 'input-text' | 'input-number' | 'dropdown' | 'dropdown-multiple' | 'custom' | 'table' | 'teste-custom';

export interface ICampoForm {
  nome: string;
  tipo: number;
  customizado: boolean;
  campoModel: string;
  config?: any;
}

export interface IConfiguracaoSimulacao {
  vrInvestimentoInicial: number,
  vrCota: number,
  vrInvestimentoMensal: number,
  vrDividendo: number,
  blReinvestirDividendos: boolean,
  blReinvestirDividendosInvestimentoMensalCoberto,
  qtdMeses: number
};

export interface ISimulacaoItem {
  mes: number,
  vrFFI: number,
  vrRendimentoDividendo: number,
  vrInvestimentoMesTotal: number,
  vrInvestimentoMesSobra: number,
  vrRendimentoSobra: number,
  qtdCotasCompradasMes: number,
  qtdCotasTotal: number
}

export interface ISimulacao {
  oConfiguracao: IConfiguracaoSimulacao,
  arrSimulacaoitens: ISimulacaoItem[]
}