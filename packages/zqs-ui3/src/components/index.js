import ZqsButton from './button/button.js'
import ZqsTable from './table/table.js'
import ZqsInput from './input/input.js'
import ZqsAlertConstructor from './alert/alert.js'
import ZqsCheckbox from './checkbox/checkbox.js'
import ZqsSelect from './select/select.js'
import ZqsSelectOption from './select-option/option.js'
import ZqsBackTop from './backtop/backtop.js'
import ZqsHeader from './header/header.js'

// 组件列表
const elmPlusComponents = [
  ZqsButton,
  ZqsTable,
  ZqsInput,
  ZqsCheckbox,
  ZqsSelect,
  ZqsSelectOption,
  ZqsBackTop,
  ZqsHeader,
];

// 安装方法：全局注册静态组件
const install = (app) => {
  elmPlusComponents.forEach((comp) => app.use(comp))
  app.config.globalProperties.$alert = ZqsAlertConstructor // 挂载动态调用方法
  app.provide('ZqsAlert', ZqsAlertConstructor)
}

// 默认导出：包含 install 方法和动态调用方法
export default {
  install,
}

// 单独导出组件
export {
  ZqsButton,
  ZqsTable,
  ZqsInput,
  ZqsCheckbox,
  ZqsSelect,
  ZqsSelectOption,
  ZqsBackTop,
  ZqsHeader,
  ZqsAlertConstructor as ZqsAlert, // 导出动态调用方法
}