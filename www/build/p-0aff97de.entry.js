import{r as t,c as s,h as e,g as o}from"./p-8d116f2c.js";const i=class{constructor(e){t(this,e),this.onhided=s(this,"onhided",7),this.text="This is an almost important alert!",this.kind="info",this.hide=!1}componentDidLoad(){console.log("Alert load")}componentDidUpdate(){console.log("Alert update")}onClick(){this.hide=!this.hide,this.onhided.emit({when:new Date})}getCssClass(){return this.kind+(this.hide?" hide":"")}render(){return e("p",{class:this.getCssClass()},this.text)}};i.style=".sc-my-alert-h{display:block}p.sc-my-alert{line-height:1.5;padding:8px 15px;border:1px solid transparent;font-size:14px;font-family:sans-serif}p.info.sc-my-alert{background-color:#e6f7ff;border-color:#91d5ff}p.success.sc-my-alert{background-color:#f6ffed;border-color:#b7eb8f}p.error.sc-my-alert{background-color:#fff1f0;border-color:#ffa39e}p.hide.sc-my-alert{display:none}";const c=class{constructor(s){t(this,s)}getText(){return(this.first||"")+((t=this.middle)?" "+t:"")+((s=this.last)?" "+s:"");var t,s}render(){return e("div",null,"Hello, World! I'm ",this.getText())}};c.style=":host{display:block}";const l=class{constructor(e){t(this,e),this.valueChange=s(this,"valueChange",7),this.model={},this.campos=[]}handleModelChange(t){this.valueChange.emit({value:t})}componentDidLoad(){setTimeout(()=>{this.model=Object.assign(Object.assign({},this.model),{nome:"Gian Henrique"})},5e3)}getCssClass(){return"my-form"}getCampoValor(t){return this.model[t]}render(){return e("div",{class:this.getCssClass()},this.campos.map(t=>e("div",{class:"my-form-campo-container"},"custom"==t.tipo?e("slot",{name:t.nome}):e("div",{class:"my-form-campo"},this.getCampoValor(t.nome)))))}static get watchers(){return{model:["handleModelChange"]}}};l.style=".sc-my-form-h{display:block}";const n=class{constructor(e){t(this,e),this.valueChange=s(this,"valueChange",7)}valueChanged(){const t=this.el.querySelector("input");t.value!==this.valor&&(t.value=this.valor)}getCssClass(){return"my-input-container"+(""==this.valor?" placeholder-ativo":"")}onInputChange(t){this.valor=t.target.value,this.valueChange.emit({valor:this.valor})}render(){return e("div",{class:this.getCssClass()},e("div",{class:"rotulo"},this.rotulo),e("input",{type:"text",value:this.valor,placeholder:this.placeholder,onInput:t=>this.onInputChange(t)}))}get el(){return o(this)}static get watchers(){return{valor:["valueChanged"]}}};n.style='.sc-my-input-h{display:block;font-family:"Montserrat", "Regular", sans-serif, serif, inherit}input.sc-my-input{border:none;border-bottom:1px solid #CBCBCB;color:black;font-size:15px;max-width:100%}.placeholder-ativo.sc-my-input input.sc-my-input{font-size:14px;color:#78719A}.my-input-container.sc-my-input input.sc-my-input:focus{border-bottom:1px solid #413872}.my-input-container.com-erros.sc-my-input input.sc-my-input:focus{border-bottom:1px solid #F03e41}.rotulo.sc-my-input{font-size:12px;color:#78719A}.placeholder-ativo.sc-my-input .rotulo.sc-my-input{display:none}';const r=class{constructor(e){t(this,e),this.valueChange=s(this,"valueChange",7)}valueChanged(){const t=this.el.querySelector("input");t.value!==this.valor&&(t.value=this.valor)}getCssClass(){return"my-input-container"+(""==this.valor?" placeholder-ativo":"")}onInputChange(t){this.valor=t.target.value,this.valueChange.emit({valor:this.valor})}render(){return e("div",{class:this.getCssClass()},e("div",{class:"rotulo"},this.rotulo),e("input",{type:"number",value:this.valor,placeholder:this.placeholder,onInput:t=>this.onInputChange(t)}),e("div",{class:"range-container"},e("input",{type:"range",value:this.valor,name:"range",id:"",class:"range"})))}get el(){return o(this)}static get watchers(){return{valor:["valueChanged"]}}};r.style='.sc-my-range-h{display:block;font-family:"Montserrat", "Regular", sans-serif, serif, inherit}input.sc-my-range{border:none;border-bottom:1px solid #CBCBCB;color:black;font-size:15px;max-width:100%}.placeholder-ativo.sc-my-range input.sc-my-range{font-size:14px;color:#78719A}.my-input-container.sc-my-range input.sc-my-range:focus{border-bottom:1px solid #413872}.my-input-container.com-erros.sc-my-range input.sc-my-range:focus{border-bottom:1px solid #F03e41}.rotulo.sc-my-range{font-size:12px;color:#78719A}.placeholder-ativo.sc-my-range .rotulo.sc-my-range{display:none}';const a=class{constructor(e){t(this,e),this.valueChange=s(this,"valueChange",7),this.multiple=!1,this.model=null,this.values=[],this.isOpen=!1}handleModelChange(t){this.atualizaMarcacaoLista(),this.valueChange.emit({value:t})}handleItemClick(t){if(this.multiple){t.checked=!t.checked;const s=this.isSelected(t);if(t.checked&&!s)this.model=[...this.model,t.value];else if(!t.checked&&s){const s=this.model.filter(s=>s!=t.value);this.model=[...s]}}else this.model=t.value,this.isOpen=!1}handleSelectBlockClick(){this.isOpen?(this.isOpen=!1,this.element.querySelector(".btn-get-foco").blur()):setTimeout(()=>{this.isOpen=!0})}handleFocusout(){setTimeout(()=>{!this.multiple&&this.isOpen&&(this.isOpen=!1,this.element.querySelector(".btn-get-foco").blur())},250)}componentWillRender(){this.atualizaMarcacaoLista()}componentDidUpdate(){this.isOpen&&this.element.querySelector(".btn-get-foco").focus()}isSelected(t){return this.multiple?this.model.some(s=>t.value==s):t.value==this.model}atualizaMarcacaoLista(){this.values.forEach(t=>{t.checked=this.isSelected(t)})}getSelectedNames(){if(this.multiple){let t="";return this.values.filter(t=>t.checked).forEach((s,e)=>{e>0&&(t+=", "),t+=s.name}),t}{const t=this.values.find(t=>t.checked);return null!=t?t.name:""}}getCssClass(){return"my-select"+(this.isOpen?" open":"")+(this.multiple?" multiple":" normal")}getOptionCssClass(t){return"select-option"+(t.checked?" checked":"")}getOptionsBlockCssClass(){return"options-block"+(this.multiple?" multiple":" normal")}render(){return e("div",{class:this.getCssClass()},e("label",{class:"select-block"},e("div",{class:"selected-value"},e("div",{class:"value"},this.getSelectedNames())),e("input",{type:"text",class:"btn-get-foco",onClick:()=>this.handleSelectBlockClick(),onBlur:()=>this.handleFocusout()})),e("div",{class:this.getOptionsBlockCssClass()},this.values.map(t=>e("div",{class:this.getOptionCssClass(t),onClick:()=>this.handleItemClick(t)},e("div",{class:"option-mark"}),e("div",{class:"option-value"},t.name)))))}get element(){return o(this)}static get watchers(){return{model:["handleModelChange"]}}};a.style='.sc-my-select-h{display:block}.my-select.sc-my-select{display:block;max-width:250px}.my-select.sc-my-select .select-block.sc-my-select{display:block;position:relative;height:25px;border-bottom:2px solid #aa62f2;padding:3px 20px 3px 0}.my-select.sc-my-select .select-block.sc-my-select:after{pointer-events:none;content:"";position:absolute;top:10px;right:2px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;z-index:9;border-top:8px solid #271235}.my-select.sc-my-select .select-block.sc-my-select .selected-value.sc-my-select{display:block}.my-select.sc-my-select .select-block.sc-my-select .selected-value.sc-my-select .value.sc-my-select{word-break:break-all;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.my-select.sc-my-select .select-block.sc-my-select .btn-get-foco.sc-my-select{position:absolute;float:left;width:0;height:0;opacity:0}.my-select.sc-my-select .options-block.sc-my-select{display:none;background-color:#f2f0f0}.my-select.sc-my-select .options-block.sc-my-select .select-option.sc-my-select{padding:12px 10px;margin:3px 0;cursor:pointer}.my-select.sc-my-select .options-block.sc-my-select .select-option.checked.sc-my-select{background-color:#f2f2f2}.my-select.sc-my-select .options-block.normal.sc-my-select{border-bottom-left-radius:4px;border-bottom-right-radius:4px;background-color:white;-webkit-box-shadow:0px 5px 16px -8px rgba(0, 0, 0, 0.75);-moz-box-shadow:0px 5px 16px -8px rgba(0, 0, 0, 0.75);box-shadow:0px 5px 16px -8px rgba(0, 0, 0, 0.75)}.my-select.sc-my-select .options-block.normal.sc-my-select .select-option.sc-my-select .option-mark.sc-my-select input.sc-my-select{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.my-select.sc-my-select .options-block.multiple.sc-my-select .select-option.sc-my-select{display:flex;align-items:center}.my-select.sc-my-select .options-block.multiple.sc-my-select .select-option.sc-my-select .option-mark.sc-my-select{height:10px;width:10px;border:1px solid black;margin-right:5px}.my-select.sc-my-select .options-block.multiple.sc-my-select .select-option.checked.sc-my-select .option-mark.sc-my-select{background-color:seagreen}.my-select.open.sc-my-select .select-block.sc-my-select:after{border-top:8px solid #271235;-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);transform:rotate(180deg)}.my-select.open.sc-my-select .options-block.sc-my-select{display:block}';const h=class{constructor(e){t(this,e),this.tabActivate=s(this,"tabActivate",7),this.name="Tab",this.active=!1}onClick(){this.active=!0,this.tabActivate.emit({name:this.name})}getCssClass(){return"my-tab"+(this.active?" active":"")}render(){return e("div",{class:this.getCssClass()},e("slot",null))}};h.style=".sc-my-tab-h{display:block}.my-tab.sc-my-tab{padding:12px 16px;cursor:pointer}.my-tab.active.sc-my-tab{color:#1890ff;font-weight:500;border-bottom:2px solid #1890ff}";const p=class{constructor(s){t(this,s)}handleActiveTabChange(t){this.getHeadings().forEach(s=>{s.active=s.name==t})}tabChildActivate(t){this.activeTab=t.detail.name}componentDidLoad(){if(void 0===this.activeTab){const t=this.getHeadings(),s=t.filter(t=>t.active);t.length>0&&0==s.length?this.activeTab=t[0].name:s.length>1&&(this.activeTab=s[0].name)}else this.handleActiveTabChange(this.activeTab)}getHeadings(){return[].slice.call(this.element.querySelector(".my-tabs").children).filter(t=>"my-tab"===t.tagName.toLowerCase())}getCssClass(){return"my-tabs"}render(){return e("div",{class:this.getCssClass()},e("slot",null))}get element(){return o(this)}static get watchers(){return{activeTab:["handleActiveTabChange"]}}};p.style=".sc-my-tabs-h{display:block}.my-tabs.sc-my-tabs{display:flex}";export{i as my_alert,c as my_component,l as my_form,n as my_input,r as my_range,a as my_select,h as my_tab,p as my_tabs}