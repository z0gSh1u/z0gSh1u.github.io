import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  title: `ZHUO Xu's Page - zxuuu.tech`,
  theme: defaultTheme({
    sidebar: [
      {
        text: 'Home',
        collapsible: false,
        link: '/',
      },
      {
        text: '项目',
        link: '/projects',
        children: [
          {
            text: 'WIPs',
            link: '/projects/wip.html',
          },
          {
            text: 'Finished',
            link: '/projects/finished.html',
          },
        ],
      },
      {
        text: '博客博文',
        link: '/blogs.html',
      },
      {
        text: '日程安排',
        link: '/calendar.html',
      },
    ],
    navbar: [
      {
        text: 'zxuuu.tech',
        link: '/',
      },
      {
        text: '博客园',
        link: 'https://cnblogs.com/zxuuu',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/z0gSh1u',
      },
    ],
  }),
})
