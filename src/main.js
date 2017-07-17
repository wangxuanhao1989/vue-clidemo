import App from './components/example/App.js'
//引用css
    import "./css/App.css";

const components = [
    App,
];
const install = function (Vue) {
    // component => {} es6 语法正常浏览器不支持
    // 等价于
    // function(component){
    //     Vue.component(component.name, component);
    // }
    components.map(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export  default {
    install,
    App,

}
