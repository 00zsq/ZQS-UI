import Vue from 'vue';
import AlertComponent from './alert.vue';

const ZqsAlertConstructor = Vue.extend(AlertComponent);

const ZqsAlert = (options) => {
  const instance = new ZqsAlertConstructor({
    propsData: options,
  });

  instance.$mount(); // 手动挂载
  document.body.appendChild(instance.$el); // 添加到 DOM

  // 返回关闭方法
  return {
    close: () => {
      instance.$destroy(); // 销毁实例
      document.body.removeChild(instance.$el); // 从 DOM 中移除
    },
  };
};

export default ZqsAlert;