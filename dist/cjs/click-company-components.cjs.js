'use strict';

const index = require('./index-2b6c5b82.js');

/*
 Stencil Client Patch Browser v2.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('click-company-components.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-alert_8.cjs",[[2,"my-alert",{"text":[1],"kind":[1],"hide":[32]},[[0,"click","onClick"]]],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[6,"my-form",{"model":[1032],"campos":[16]}],[2,"my-input",{"valor":[1025],"rotulo":[1],"placeholder":[1]}],[2,"my-range",{"valor":[1025],"rotulo":[1],"placeholder":[1]}],[2,"my-select",{"multiple":[4],"model":[1032],"values":[1040],"isOpen":[32]}],[6,"my-tab",{"name":[1],"active":[4]},[[0,"click","onClick"]]],[6,"my-tabs",{"activeTab":[1025,"active-tab"]},[[0,"tabActivate","tabChildActivate"]]]]]], options);
});
