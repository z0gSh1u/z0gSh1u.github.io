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
        text: 'Projects',
        link: 'projects.html',
      },
      {
        text: 'Blogs',
        link: 'blogs.html',
      },
      {
        text: 'Calendar',
        link: 'calendar.html',
      },
    ],
    navbar: [
      {
        text: 'zxuuu.tech',
        link: '/',
      },
      {
        text: 'cnblogs',
        link: 'https://cnblogs.com/zxuuu',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/z0gSh1u',
      },
    ],
  }),
})
