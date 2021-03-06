/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IHidedEvent } from "./components/my-alert/my-alert";
import { IConfigComponenteFactory } from "./components/my-component-factory/my-component-factory";
import { IConfigComponenteFactory as IConfigComponenteFactory1 } from "./components/my-component-factory/my-component-factory";
import { ICampoForm, IConfiguracaoSimulacao } from "./components/my-form/my-form";
import { IValueChange } from "./components/my-input/my-input";
import { IValueChange as IValueChange1 } from "./components/my-range/my-range";
import { ISelectValue, IValueChangeEvent, TSelectValue } from "./components/my-select/my-select";
import { ITabActivateEvent } from "./components/my-tab/my-tab";
export namespace Components {
    interface MyAlert {
        "kind": "info" | "success" | "error";
        "text": string;
    }
    interface MyComponentFactory {
        /**
          * Eventos do componente retornado
         */
        "arrConfig": IConfigComponenteFactory[];
        /**
          * Eventos do componente retornado
         */
        "eventos": any;
        /**
          * Propriedades do componente retornado
         */
        "propriedades": any;
        /**
          * tipo de componente desejado
         */
        "tipo": number;
    }
    interface MyCustomComponent {
        /**
          * Eventos do componente retornado
         */
        "eventos": any;
        /**
          * Propriedades do componente retornado
         */
        "propriedades": any;
        /**
          * Tag do componente retornado
         */
        "tag": string;
    }
    interface MyForm {
        /**
          * Array de configurações da fabricação de componentes do formulário
         */
        "arrConfigComponentes": IConfigComponenteFactory[];
        /**
          * Array de configuração dos campos que serão apresentados no formulário
         */
        "campos": ICampoForm[];
        "componentFactoryTag": string;
        /**
          * Objeto com a fonte de dados do formulário
         */
        "model": any;
        "oInputConfiguracaoSimulacao": IConfiguracaoSimulacao;
    }
    interface MyInput {
        "placeholder": string;
        "rotulo": string;
        "valor": string;
    }
    interface MyRange {
        "placeholder": string;
        "rotulo": string;
        "valor": string;
    }
    interface MySelect {
        /**
          * Valor selecionado. Pode ser um valor comum, ou uma lista de valores no caso
         */
        "model": TSelectValue | TSelectValue[];
        /**
          * Define se é um Select comum, ou com múltipla seleção
         */
        "multiple": boolean;
        /**
          * Lista utilizada para apresentar dados na tela
         */
        "values": ISelectValue[];
    }
    interface MyTab {
        "active": boolean;
        "name": string;
    }
    interface MyTabs {
        "activeTab": string;
    }
}
declare global {
    interface HTMLMyAlertElement extends Components.MyAlert, HTMLStencilElement {
    }
    var HTMLMyAlertElement: {
        prototype: HTMLMyAlertElement;
        new (): HTMLMyAlertElement;
    };
    interface HTMLMyComponentFactoryElement extends Components.MyComponentFactory, HTMLStencilElement {
    }
    var HTMLMyComponentFactoryElement: {
        prototype: HTMLMyComponentFactoryElement;
        new (): HTMLMyComponentFactoryElement;
    };
    interface HTMLMyCustomComponentElement extends Components.MyCustomComponent, HTMLStencilElement {
    }
    var HTMLMyCustomComponentElement: {
        prototype: HTMLMyCustomComponentElement;
        new (): HTMLMyCustomComponentElement;
    };
    interface HTMLMyFormElement extends Components.MyForm, HTMLStencilElement {
    }
    var HTMLMyFormElement: {
        prototype: HTMLMyFormElement;
        new (): HTMLMyFormElement;
    };
    interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {
    }
    var HTMLMyInputElement: {
        prototype: HTMLMyInputElement;
        new (): HTMLMyInputElement;
    };
    interface HTMLMyRangeElement extends Components.MyRange, HTMLStencilElement {
    }
    var HTMLMyRangeElement: {
        prototype: HTMLMyRangeElement;
        new (): HTMLMyRangeElement;
    };
    interface HTMLMySelectElement extends Components.MySelect, HTMLStencilElement {
    }
    var HTMLMySelectElement: {
        prototype: HTMLMySelectElement;
        new (): HTMLMySelectElement;
    };
    interface HTMLMyTabElement extends Components.MyTab, HTMLStencilElement {
    }
    var HTMLMyTabElement: {
        prototype: HTMLMyTabElement;
        new (): HTMLMyTabElement;
    };
    interface HTMLMyTabsElement extends Components.MyTabs, HTMLStencilElement {
    }
    var HTMLMyTabsElement: {
        prototype: HTMLMyTabsElement;
        new (): HTMLMyTabsElement;
    };
    interface HTMLElementTagNameMap {
        "my-alert": HTMLMyAlertElement;
        "my-component-factory": HTMLMyComponentFactoryElement;
        "my-custom-component": HTMLMyCustomComponentElement;
        "my-form": HTMLMyFormElement;
        "my-input": HTMLMyInputElement;
        "my-range": HTMLMyRangeElement;
        "my-select": HTMLMySelectElement;
        "my-tab": HTMLMyTabElement;
        "my-tabs": HTMLMyTabsElement;
    }
}
declare namespace LocalJSX {
    interface MyAlert {
        "kind"?: "info" | "success" | "error";
        "onOnhided"?: (event: CustomEvent<IHidedEvent>) => void;
        "text"?: string;
    }
    interface MyComponentFactory {
        /**
          * Eventos do componente retornado
         */
        "arrConfig"?: IConfigComponenteFactory[];
        /**
          * Eventos do componente retornado
         */
        "eventos"?: any;
        /**
          * Propriedades do componente retornado
         */
        "propriedades"?: any;
        /**
          * tipo de componente desejado
         */
        "tipo"?: number;
    }
    interface MyCustomComponent {
        /**
          * Eventos do componente retornado
         */
        "eventos"?: any;
        /**
          * Propriedades do componente retornado
         */
        "propriedades"?: any;
        /**
          * Tag do componente retornado
         */
        "tag"?: string;
    }
    interface MyForm {
        /**
          * Array de configurações da fabricação de componentes do formulário
         */
        "arrConfigComponentes"?: IConfigComponenteFactory[];
        /**
          * Array de configuração dos campos que serão apresentados no formulário
         */
        "campos"?: ICampoForm[];
        "componentFactoryTag"?: string;
        /**
          * Objeto com a fonte de dados do formulário
         */
        "model"?: any;
        "oInputConfiguracaoSimulacao"?: IConfiguracaoSimulacao;
        /**
          * Evento de mudança de valor do formulário
         */
        "onValueChange"?: (event: CustomEvent<any>) => void;
    }
    interface MyInput {
        "onValueChange"?: (event: CustomEvent<IValueChange>) => void;
        "placeholder"?: string;
        "rotulo"?: string;
        "valor"?: string;
    }
    interface MyRange {
        "onValueChange"?: (event: CustomEvent<IValueChange>) => void;
        "placeholder"?: string;
        "rotulo"?: string;
        "valor"?: string;
    }
    interface MySelect {
        /**
          * Valor selecionado. Pode ser um valor comum, ou uma lista de valores no caso
         */
        "model"?: TSelectValue | TSelectValue[];
        /**
          * Define se é um Select comum, ou com múltipla seleção
         */
        "multiple"?: boolean;
        /**
          * Evento de mudança de valor
         */
        "onValueChange"?: (event: CustomEvent<IValueChangeEvent>) => void;
        /**
          * Lista utilizada para apresentar dados na tela
         */
        "values"?: ISelectValue[];
    }
    interface MyTab {
        "active"?: boolean;
        "name"?: string;
        "onTabActivate"?: (event: CustomEvent<ITabActivateEvent>) => void;
    }
    interface MyTabs {
        "activeTab"?: string;
    }
    interface IntrinsicElements {
        "my-alert": MyAlert;
        "my-component-factory": MyComponentFactory;
        "my-custom-component": MyCustomComponent;
        "my-form": MyForm;
        "my-input": MyInput;
        "my-range": MyRange;
        "my-select": MySelect;
        "my-tab": MyTab;
        "my-tabs": MyTabs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-alert": LocalJSX.MyAlert & JSXBase.HTMLAttributes<HTMLMyAlertElement>;
            "my-component-factory": LocalJSX.MyComponentFactory & JSXBase.HTMLAttributes<HTMLMyComponentFactoryElement>;
            "my-custom-component": LocalJSX.MyCustomComponent & JSXBase.HTMLAttributes<HTMLMyCustomComponentElement>;
            "my-form": LocalJSX.MyForm & JSXBase.HTMLAttributes<HTMLMyFormElement>;
            "my-input": LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
            "my-range": LocalJSX.MyRange & JSXBase.HTMLAttributes<HTMLMyRangeElement>;
            "my-select": LocalJSX.MySelect & JSXBase.HTMLAttributes<HTMLMySelectElement>;
            "my-tab": LocalJSX.MyTab & JSXBase.HTMLAttributes<HTMLMyTabElement>;
            "my-tabs": LocalJSX.MyTabs & JSXBase.HTMLAttributes<HTMLMyTabsElement>;
        }
    }
}
