import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN', },
  ],
  themeConfig: {
    name: 'zxuuu.tech',
    footer: `Based on <a href="https://d.umijs.org" target="_blank">dumi</a>. Deployed on <a href='https://pages.github.com/' target='_blank'>GitHub Pages</a>.`,
    logo: false,
    nav: {
      mode: 'append',
      value: [
        { title: '500px', link: 'https://github.com/z0gSh1u' },
        { title: 'Steam', link: 'https://steamcommunity.com/id/zhuoxu/' },
        {
          title: '谷歌学术',
          link: 'https://scholar.google.com/citations?hl=en&user=nWCWwY0AAAAJ',
        },
      ],
    },
    prefersColor: {
      default: 'light',
      switch: false,
    },
    socialLinks: {
      github: 'https://github.com/z0gSh1u',
      yuque: 'https://www.yuque.com/z0gsh1u',
      zhihu: 'https://www.zhihu.com/people/zhuoxu',
      linkedin: 'https://www.linkedin.com/in/seuzhuoxu/',
    },
    editLink: false,

  },
  mako: {},
});
