import Vue from 'vue';
import App from './App.vue';
new Vue({
    el: '#root',
    template: '<h1>{{message}}</h1>',
    render: (h) => h(App) //<-- Either use data or link another component using a function
})