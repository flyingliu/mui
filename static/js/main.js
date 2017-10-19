//  js/script/main.js
require.config({

    paths: {
        'css': 'https://cdn.bootcss.com/require-css/0.1.10/css',
        "vue": "https://cdn.bootcss.com/vue/2.4.4/vue",
        "vueRouter": "https://cdn.bootcss.com/vue-router/2.7.0/vue-router",
        "mui":"https://cdn.bootcss.com/mui/3.4.0/js/mui.min",
        "muizoom":"/static/lib/mui.zoom", 
        "muipreviewimage":"/static/lib/mui.previewimage",
        "muicss":"https://cdn.bootcss.com/mui/3.4.0/css/mui.min",
        "list":"/static/components/list",
        "detail":"/static/components/detail",
        "AlloyFingerVue":"/static/lib/alloy_finger.vue",
        "AlloyFinger":"/static/lib/alloy_finger"
    },
    shim: {
        'vueRouter': {
            deps: ['vue'],
            exports: 'vueRouter'
        },
        'muizoom':{
            deps: ['mui']
        },
        'muipreviewimage':{
            deps: ['mui']
        },
        'AlloyFingerVue':{
            deps: ['vue','AlloyFinger'],
            exports: 'AlloyFingerVue'
        }
    }
})

var mods = [
    'vue',
    'vueRouter',
    'mui',
    'list',
    'detail',
    'css!muicss',

    // 'data'
]
require(mods, function( Vue, VueRouter, mui, list,detail) {
    Vue.use(VueRouter);
    Vue.use(AlloyFingerVue);
    const routes = [
        { path: '/', component: list },        
        { path: '/detail', component: detail },
    ]
    window.router = new VueRouter({
        routes
    })



    // router.isWeb = browserFn().aoliliya;

    // document.addEventListener('touchmove', function(e) { e.preventDefault(); }, isPassive() ? {
    //     capture: false,
    //     passive: false
    // } : false);


    const app = new Vue({
        router
    }).$mount('#app')

})