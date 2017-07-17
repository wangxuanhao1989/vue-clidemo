import App from "./vue/App.vue"
App.install = function (Vue) {
    Vue.component(App.name,App);
};
export default App