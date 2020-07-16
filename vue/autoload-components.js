/**
 * Instead of importing and defining global components
 * manually, we can autoload them in webpack like this
 */

const req = require.context("./", true, /\.vue$/i);

req.keys().map(key => {

  // remove the extension
  let name = key.match(/\w+/)[0];
  
  // convert `SomeComponent` to `k-some-component`   
  name = "k-" + Vue.$helper.string.camelToKebab(name);
  return Vue.component(name, req(key).default);

});
