import { defaultTheme } from '@vuepress/theme-default'


export default {
  base: "/",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  lang: 'zh-cn',
  title: '叮小跳',
  description: '一款强大的跳过广告应用',
  
  theme: defaultTheme({
    contributors: false,
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '新手上路',
        link: '/wiki/xinshou',
      },
      {
        text: '常见问题',
        link: '/wiki/faq',
      },
    ],
    sidebar: {
      '/guide/':[
        {
          text: '叮小跳简介',
          collapsible: false,
          children: ['/guide/introduce.md'],
        },
      ],
      '/wiki/': [
        {
          text: '新手上路',
          collapsible: false,
          children: ['/wiki/xinshou.md'],
        },
        {
          text: '后台保活',
          collapsible: false,
          children: ['/wiki/houtai/huawei.md'],
          children: ['/wiki/houtai/xiaomi.md'],
          children: ['/wiki/houtai/oppo.md'],
          children: ['/wiki/houtai/meizu.md'],
          children: ['/wiki/houtai/sanxing.md'],
          children: ['/wiki/houtai/qita.md'],
        },
        {
          text: '关于我们',
          collapsible: false,
          children: ['/wiki/about.md'],
        }
      ],
    },
  }),
}
