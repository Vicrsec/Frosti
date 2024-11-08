// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "en";
export const SITE_TAB = "Frosti";
export const SITE_TITLE = "Vicrsec 🧊";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Vicrsec";
export const USER_SITE = "https://frosti.saroprock.com"
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
}
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
}

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "首页", href: "/", svg: "home", target: "_self" }, // Home page
  {
    id: "blog",
    text: "博客",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "CTF",
        text: "CTF",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "HTB",
        text: "HTB",
        href: "/blog/categories/tech",
        svg: "cube",
        target: "_self",
      }, // Technology category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "contact",
    text: "Contact",
    href: "vicrlj666@gmail.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/Vicr666",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/670898844",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  }
];
