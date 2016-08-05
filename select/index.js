/**
 * Created by youngwind on 16/8/5.
 * select框
 */

var Vue = require('vue');


var vShade = require('../shade');
Vue.component('v-shade', vShade);

require('./index.scss');

var vSelect = Vue.extend({
    template: require('./index.html'),
    props: {
        display: {
            type: [Boolean],
            default: false
        }
    },
    methods: {
        open: function () {
            this.display = true;
            console.log(this.display);
        }
    },
    computed: {
        contentClass: function () {
            return {
                'content': true,
                'v-show': this.display
            }
        }
    }
});

module.exports = vSelect;