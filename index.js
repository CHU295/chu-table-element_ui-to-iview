import ElTable from './src/table';
import ElTableColumn from './src/table-column';
import ElScrollbar from './src/util/scrollbar/src/main';

/* istanbul ignore next */
ElTable.install = function(Vue) {
  Vue.component(ElTable.name, ElTable);
  Vue.component(ElTableColumn.name, ElTableColumn);
  Vue.component(ElScrollbar.name, ElScrollbar);
};

export default ElTable;