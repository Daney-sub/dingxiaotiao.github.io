import { defaultTheme } from '@vuepress/theme-default'


export default {
    base:"/",
    head: [['link', { rel: 'icon', href: '/public/logo.png' }]],
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
    }),
  }