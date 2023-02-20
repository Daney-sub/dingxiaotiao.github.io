import { defaultTheme } from '@vuepress/theme-default'


export default {
  base: "/",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  lang: 'zh-cn',
  title: '叮小跳',
  description: '一款强大的跳过广告应用',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '新手上路',
        link: '/guide/getting-started',
      }
    ],

   // 可折叠的侧边栏
   sidebar: {
    '/reference/': [
      {
        text: 'VuePress Reference',
        collapsible: true,
        children: ['/reference/cli.md', '/reference/config.md'],
      },
      {
        text: 'Bundlers Reference',
        collapsible: true,
        children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
      },
    ],
  },


  }),



  
}