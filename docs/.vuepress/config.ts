import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

export default defineUserConfig({
  title: `ZHUO Xu's Page - zxuuu.tech`,
  theme: defaultTheme({
    sidebar: [
      {
        text: '主页',
        link: '/',
        collapsible: false,
        children: [
          {
            text: '关于我',
            link: '/index.html/#关于我',
          },
          {
            text: '社交平台',
            link: '/index.html/#社交平台',
          },
          {
            text: '教育经历',
            link: '/index.html/#教育经历',
          },
          {
            text: '工作经历',
            link: '/index.html/#工作经历',
          },
          {
            text: '出版',
            link: '/index.html/#出版',
          },
          {
            text: '部分课程成绩',
            link: '/scores.html',
          },
        ],
      },
      {
        text: '项目',
        link: '/projects',
        collapsible: true,
        children: [
          {
            text: '📖 扉页',
            link: '/projects/index.html',
          },
          {
            text: '🚧 还在做',
            link: '/projects/wip.html',
          },
          {
            text: '✨ 已完成',
            link: '/projects/finished.html',
          },
        ],
      },
      {
        text: '博客博文',
        link: '/blogs.html',
        collapsible: true,
      },
      {
        text: '日程安排',
        link: '/calendar.html',
        collapsible: false,
      },
      {
        text: 'Collections',
        link: '/Collections.html',
        collapsible: false,
      },
    ],
    navbar: [
      {
        text: 'zxuuu.tech',
        link: '/',
      },
      {
        text: '下载简历',
        link: '/个人简历(卓旭).pdf',
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
    lastUpdated: true,
    lastUpdatedText: '最后更新于',
    contributors: false,
    notFound: ['未找到该页面。'],
    backToHome: '返回主页',
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-6Q50KH8DS4',
    }),
    mediumZoomPlugin({
      selector: ':not(a) > img:not(.nozoom)',
    }),
  ],
})
