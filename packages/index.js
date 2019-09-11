// // 导入颜色选择器组件
// import demoComponent from "./demo-component/src/demo-component.vue";

// // 存储组件列表
// const components = [demoComponent];
// // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// const install = function (Vue) {
//   // 判断是否安装
//   if (install.installed) return;
//   // 遍历注册全局组件
//   components.forEach(component => {
//     Vue.component(component.name, component)
//   });
// };
// // Create module definition for Vue.use()
// const plugin = {
//   install,
// };

// // 当发现vue的时候自动下载
// let GlobalVue = null;
// if (typeof window !== 'undefined') {
//   GlobalVue = window.Vue;
// } else if (typeof global !== 'undefined') {
//   GlobalVue = global.Vue;
// }
// if (GlobalVue) {
//   GlobalVue.use(plugin);
// }
// export default {
//   // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
//   install,
//   // 以下是具体的组件列表
//   demoComponent
// };
// 导入颜色选择器组件
// 导入颜色选择器组件
import colorPicker from './color-picker'

// 存储组件列表
const components = [
  colorPicker
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否可以安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  colorPicker
}
