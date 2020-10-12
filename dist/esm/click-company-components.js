import { p as promiseResolve, b as bootstrapLazy } from './index-9eb5cab8.js';

/*
 Stencil Client Patch Browser v2.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-alert_8",[[2,"my-alert",{"text":[1],"kind":[1],"hide":[32]},[[0,"click","onClick"]]],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[6,"my-form",{"model":[1032],"campos":[16]}],[2,"my-input",{"valor":[1025],"rotulo":[1],"placeholder":[1]}],[2,"my-range",{"valor":[1025],"rotulo":[1],"placeholder":[1]}],[2,"my-select",{"multiple":[4],"model":[1032],"values":[1040],"isOpen":[32]}],[6,"my-tab",{"name":[1],"active":[4]},[[0,"click","onClick"]]],[6,"my-tabs",{"activeTab":[1025,"active-tab"]},[[0,"tabActivate","tabChildActivate"]]]]]], options);
});
