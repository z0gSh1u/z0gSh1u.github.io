// @ts-nocheck

import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [
    { id: 'en-US', name: 'EN', base: '/' },
    { id: 'zh-CN', name: '中文', base: '/zh' },
  ],
  themeConfig: {
    name: 'zxuuu.tech',
    footer: `Based on <a href="https://d.umijs.org" target="_blank">dumi</a>. Deployed on <a href='https://pages.github.com/' target='_blank'>GitHub Pages</a>.`,
    logo: false,
    nav: {
      mode: 'append',
      value: [],
    },
    prefersColor: {
      default: 'light',
      switch: false,
    },
    socialLinks: {
      github: {
        display: 'GitHub',
        icon: '/svg/github.svg',
        link: 'https://github.com/z0gSh1u',
      },
      yuque: {
        display: '语雀',
        icon: '/svg/yuque.svg',
        link: 'https://yuque.com/z0gsh1u/blog',
      },
      zhihu: {
        display: '知乎',
        icon: '/svg/zhihu.svg',
        link: 'https://www.zhihu.com/people/zhuoxu',
      },
      linkedin: {
        display: '领英',
        icon: '/svg/linkedin.svg',
        link: 'https://www.linkedin.com/in/seuzhuoxu/',
      },
      bilibili: {
        display: '哔哩哔哩',
        icon: '/svg/bilibili.svg',
        link: 'https://space.bilibili.com/530258',
      },
      '500px': {
        display: '500px',
        icon: '/svg/500px.svg',
        link: 'https://500px.com/p/136371391',
      },
      steam: {
        display: 'Steam',
        icon: '/svg/steam.svg',
        link: 'https://steamcommunity.com/id/zhuoxu/',
      },
    },
    editLink: false,
  },
  analytics: {
    ga_v2: 'G-6Q50KH8DS4',
  },
});
