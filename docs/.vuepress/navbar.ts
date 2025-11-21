/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
  { text: '导航', link: '/nav/', icon: 'material-symbols:article-outline' },
  { text: '项目', link: '/projects/', icon: 'material-symbols:article-outline' },
  { text: '笔记', link: '/notes/', icon: 'material-symbols:article-outline' },
  { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
  { text: '标签', link: '/blog/tags/', icon: 'material-symbols:label-outline' },
  { text: '归档', link: '/blog/archives/', icon: 'material-symbols:archive-outline' },
  {
    text: '更多',
    icon: 'icon-park-outline:more-three',
    items: [
      { text: '喝杯奶茶', link: '/sponsor/', icon: 'line-md:coffee-loop' },
      { text: '友情链接', link: '/friends/', icon: 'carbon:friendship' },
      { text: '关于我', link: '/about/', icon: 'carbon:person' },
    ],
  },
])
