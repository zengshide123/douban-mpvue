# mpvue-douban

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 遇见的问题

 - slider的组件在父组件中无法渲染
```
    mpvue对一些特殊的组件名有限制，换了名字后正常渲染
```
 - rate的组件无法使用vue-tiny-rate
```
    mpvue对slot渲染有限制
    css中不能直接写标签名
    v-for语句中暂时不支持复杂的js表达式不能直接使用parseInt方法
    属性style不能直接传入styleObject
    不支持mouseover和mouseout  
``` 
 - 路径跳转
 ```
    在路径跳转的时候path，要从根路径开始写
         wx.switchTab({
                 url:'/pages/team/main'
            })
 ```
 - 小程序组件scroll-view
 ```
    水平滚动的scroll-x设置不上,class设置不生效
 ```
 - 条件渲染
 ```
   v-show不生效，使用v-if 
 ```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
