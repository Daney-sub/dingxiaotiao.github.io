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
        link: '/wiki/xinshou',
      },
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    // sidebar: [
    //   // SidebarItem
    //   {
    //     text: 'wiki',
    //     link: '/wiki/',
    //     children: [
    //       // SidebarItem
    //       {
    //         text: 'github',
    //         link: 'https://github.com',
    //         children: [],
    //       },
    //       // 字符串 - 页面文件路径
    //       '/wiki/xinshou.md',
    //     ],
    //   },
    //   // 字符串 - 页面文件路径
    //   '/guide/README.md',
    // ],
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
          collapsible: true,
          children: ['/wiki/xinshou.md'],
        },
        {
          text: '分组名称',
          collapsible: true,
          children: ['/wiki/test.md'],
        }
      ],
    },

    // sidebar:{
    //   '/wiki/':[
    //     {
    //       text:'🚶‍♂️新手上路',
    //       link:'/wiki/xinshou.md#🚶‍♂️新手上路'
    //     },
    //     {
    //       text:'⚙️开启无障碍权限',
    //       link:'/wiki/xinshou.md#⚙️开启无障碍权限'
    //     },
    //     {
    //       text:'🪟开启悬浮窗权限',
    //       link:'/wiki/xinshou.md#🪟开启悬浮窗权限'
    //     },
    //     {
    //       text:'📑规则自定义规则自定义',
    //       link:'/wiki/xinshou.md#📑规则自定义'
    //     }
    //   ]
    //}
  }),
}
