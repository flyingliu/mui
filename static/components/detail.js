define([
    'vue',
    'mui',
    'AlloyFingerVue',
    "muizoom",
    "muipreviewimage",
    "css!/static/css/style"
], function (Vue, mui,AlloyFingerVue) {
    'use strict';
    let myscroll;
    let zoomScroll;
    Vue.use(AlloyFingerVue);
    var topic = {
        template: `<div class="topic article">
        <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <h1 class="mui-title">image viewer（图片预览）</h1>
    </header>
    <div class="mui-content">
        <div class="mui-content-padded">
            <p>这是图片放大预览示例，点击如下图片体验全屏预览功能</p>
            <p>
                <img src="http://ov61aed6n.bkt.clouddn.com/17-9-5/47499132.jpg" data-preview-src="" data-preview-group="1" />
            </p>
            <p>图片全屏后，双击或双指缩放均可对图片进行放大、缩小操作，左右滑动可查看同组(data-preview-group相同的图片为一组)其它图片，点击会关闭预览</p>
            <p>
                <img src="http://ov61aed6n.bkt.clouddn.com/17-9-13/70734569.jpg" data-preview-src="" data-preview-group="1" />
            </p>
            <p>第三张图片，纯粹为了占位： </p>
            <p>
                <img src="http://ov61aed6n.bkt.clouddn.com/17-8-24/77757711.jpg" data-preview-src="" data-preview-group="1" />
            </p>
        </div>
    </div>


        </div>`,

        data: () => {
            return {
                list: [],
                isActive:false
            }
        },
        methods: {
            tap() { 
                this.isActive = !this.isActive;
                if(this.isActive) {
                    this.slider.slider({
                        interval: 5000
                    });
                } else {
                    this.slider.slider({
                        interval: 0
                    });
                }
                console.log('onTap'); },
            link(id) {
                router.push({
                    name: 'topic',
                    params: {
                        id: id
                    }
                })
            }
        },
        update() {


        },
        mounted() {
            mui.previewImage();

            mui.ajax('http://jsonplaceholder.typicode.com/posts',{
                data:{
                    category:'news'
                },
                dataType:'json',//服务器返回json格式数据
                type:'get',//HTTP请求类型
                success:function(data){
                    console.log(data)
                }
            });


        }
    }

    return topic
});