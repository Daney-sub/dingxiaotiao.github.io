import { defaultTheme } from '@vuepress/theme-default'


export default {
    base:"/",
    
    theme: defaultTheme({
      // 默认主题配置
      Array<{
        text: string
        link: string
        type?: 'primary' | 'secondary'
      }>
      Array<{
        title: string
        details: string
      }>
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