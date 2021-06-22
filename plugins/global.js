import Vue from 'vue';
Vue.prototype.image = img_name => {
    return require(`@/assets/${img_name}.svg`);
};