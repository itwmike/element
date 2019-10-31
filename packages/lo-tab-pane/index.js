import LoTabPane from '../tabs/src/lo-tab-pane.vue';

/* istanbul ignore next */
LoTabPane.install = function(Vue) {
  Vue.component(LoTabPane.name, LoTabPane);
};

export default LoTabPane;
