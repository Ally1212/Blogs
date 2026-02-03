export const languages = {
  zh: "中文",
  en: "English",
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = "zh";

export const translations = {
  zh: {
    // 导航
    "nav.posts": "文章",
    "nav.tags": "标签",
    "nav.about": "关于",
    "nav.archives": "归档",
    "nav.search": "搜索",
    "nav.skipToContent": "跳转到内容",

    // 首页
    "home.recentPosts": "最新文章",
    "home.allPosts": "所有文章",

    // 文章
    "post.publishedAt": "发布于",
    "post.updatedAt": "更新于",
    "post.readingTime": "阅读时间",
    "post.minutes": "分钟",
    "post.tableOfContents": "目录",

    // 标签
    "tags.title": "标签",
    "tags.allTags": "所有标签",

    // 搜索
    "search.title": "搜索",
    "search.placeholder": "搜索文章...",
    "search.noResults": "未找到相关文章",

    // 归档
    "archives.title": "归档",

    // 关于
    "about.title": "关于",

    // 通用
    "common.backToTop": "返回顶部",
    "common.previous": "上一篇",
    "common.next": "下一篇",
    "common.readMore": "阅读更多",

    // 主题
    "theme.toggle": "切换主题",
    "theme.light": "浅色模式",
    "theme.dark": "深色模式",

    // 语言
    "lang.switch": "切换语言",
  },
  en: {
    // Navigation
    "nav.posts": "Posts",
    "nav.tags": "Tags",
    "nav.about": "About",
    "nav.archives": "Archives",
    "nav.search": "Search",
    "nav.skipToContent": "Skip to content",

    // Home
    "home.recentPosts": "Recent Posts",
    "home.allPosts": "All Posts",

    // Post
    "post.publishedAt": "Published at",
    "post.updatedAt": "Updated at",
    "post.readingTime": "Reading time",
    "post.minutes": "min",
    "post.tableOfContents": "Table of contents",

    // Tags
    "tags.title": "Tags",
    "tags.allTags": "All Tags",

    // Search
    "search.title": "Search",
    "search.placeholder": "Search posts...",
    "search.noResults": "No posts found",

    // Archives
    "archives.title": "Archives",

    // About
    "about.title": "About",

    // Common
    "common.backToTop": "Back to top",
    "common.previous": "Previous",
    "common.next": "Next",
    "common.readMore": "Read more",

    // Theme
    "theme.toggle": "Toggle theme",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",

    // Language
    "lang.switch": "Switch language",
  },
} as const;

export type TranslationKey = keyof typeof translations.zh;
