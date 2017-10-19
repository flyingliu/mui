define([
    'vue',
    'mui',
    'AlloyFingerVue'
], function (Vue, mui,AlloyFingerVue) {
    'use strict';
    let myscroll;
    let zoomScroll;
    Vue.use(AlloyFingerVue);
    var topic = {
        template: `<div class="topic article">
        <header class="mui-bar mui-bar-nav">
        <h1 class="mui-title">图片轮播</h1>
    </header>
    <div class="mui-content">
        <ul class="mui-table-view mui-table-view-chevron">
            <li id="switch" class="mui-table-view-cell">
                定时轮播
                <div class="mui-switch" :class="{'mui-active':isActive}" v-finger:tap="tap">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
        </ul>
    </div>
    <div id="slider" class="mui-slider" >
        <div class="mui-slider-group mui-slider-loop">
            <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate">
                <a href="#">
                    <img src="http://ww1.sinaimg.cn/large/006poVAQgy1fi5bby9wxgj30go0b3gn8.jpg">
                </a>
            </div>
            <!-- 第一张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="http://ww1.sinaimg.cn/large/006poVAQgy1fi5bby9wxgj30go0b3gn8.jpg">
                </a>
            </div>
            <!-- 第二张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="http://ww1.sinaimg.cn/large/006poVAQgy1fi5bby9wxgj30go0b3gn8.jpg">
                </a>
            </div>
            <!-- 第三张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="http://ww1.sinaimg.cn/large/006poVAQgy1fi5bby9wxgj30go0b3gn8.jpg">
                </a>
            </div>
            <!-- 第四张 -->
            <div class="mui-slider-item">
                <a href="#">
                    <img src="http://ww1.sinaimg.cn/large/006poVAQgy1fi5bby9wxgj30go0b3gn8.jpg">
                </a>
            </div>
            <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
            <div class="mui-slider-item mui-slider-item-duplicate">
                <a href="#">
                    <img src="http://ww1.sinaimg.cn/large/006poVAQgy1fi5bby9wxgj30go0b3gn8.jpg">
                </a>
            </div>
        </div>
        <div class="mui-slider-indicator">
            <div class="mui-indicator mui-active"></div>
            <div class="mui-indicator"></div>
            <div class="mui-indicator"></div>
            <div class="mui-indicator"></div>
        </div>
    </div>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-gear"></span>
                    <div class="mui-media-body">Setting</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">about</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-more"></span>
                    <div class="mui-media-body">more</div></a></li>
        </ul> 





            <div class="artcon">
                <article>
                    <ul>
                        <li v-for="item in list" @click="link(item.id)">{{item.id}}:{{item.title}}</li>
                    </ul>
                </article>
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
            mui.init({
                swipeBack: true //启用右滑关闭功能
            });
            this.slider = mui("#slider");
            this.slider.slider({
                // interval: 5000
            });

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