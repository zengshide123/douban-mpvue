import Vue from 'vue'
import App from './App'
import store from './store'
import fly from './utils/flyio'

Vue.prototype.$store = store
Vue.prototype.$fly = fly

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/heart/main', 'pages/setting/main', 'pages/team/main', ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#E3453A',
      navigationBarTitleText: '豆瓣-mpvue',
      navigationBarTextStyle: '#fff',
      enablePullDownRefresh:true
    },
    tabBar:{
          position:'bottom',
          color: '#7f7f7f',
          selectedColor: '#E3453A',
          backgroundColor:'#fff',
          borderStyle:'#fff',
          list:[
            {
              text:'首页',
              pagePath:'pages/index/main',
              iconPath:'/static/tabsIcon/index-default.png',
              selectedIconPath:'/static/tabsIcon/index.png'
            },
            {
              text:'关注',
              pagePath:'pages/heart/main',
              iconPath:'/static/tabsIcon/heart-default.png',
              selectedIconPath:'/static/tabsIcon/heart.png'
            },
            {
              text:'个人',
              pagePath:'pages/team/main',
              iconPath:'/static/tabsIcon/team-default.png',
              selectedIconPath:'/static/tabsIcon/team.png'
            },
            {
              text:'设置',
              pagePath:'pages/setting/main',
              iconPath:'/static/tabsIcon/setting-default.png',
              selectedIconPath:'/static/tabsIcon/setting.png'
            }
          ]
    }
  }
}
