import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Products',
      links: [
        {
          text: 'Server',
          href: getPermalink('/product/server'),
        },
        {
          text: 'Cloud',
          href: getPermalink('/product/cloud'),
        },
        {
          text: 'VPS',
          href: getPermalink('/product/vps'),
        },
        {
          text: 'CDN',
          href: getPermalink('/product/cdn'),
        },
        {
          text: 'Hosting',
          href: getPermalink('/product/hosting'),
        },
        {
          text: 'Email',
          href: getPermalink('/product/email'),
        },
        {
          text: 'SSL',
          href: getPermalink('/product/ssl'),
        },
      ],
    },
    {
      text: 'Platform',
      links: [
        {
          text: 'AlibabaCloud',
          href: getPermalink('/platform/alibabacloud'),
        },
        {
          text: 'AWS',
          href: getPermalink('/platform/aws'),
        },
        {
          text: 'Azure',
          href: getPermalink('/platform/azure'),
        },
        {
          text: 'GCP',
          href: getPermalink('/platform/gcp'),
        },
        {
          text: 'VMWare',
          href: getPermalink('/platform/vmware'),
        },
        {
          text: 'Backup',
          href: getPermalink('/platform/backup'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Github', href: 'https://github.com/digizus/digizus', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Server', href: '/product/server' },
        { text: 'Cloud', href: '/product/cloud' },
        { text: 'VPS', href: '/product/vps' },
        { text: 'CDN', href: '/product/cdn' },
        { text: 'Hosting', href: '/product/hosting' },
        { text: 'Email', href: '/product/email' },
        { text: 'SSL', href: '/product/ssl' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'AlibabaCloud', href: '/platform/alibabacloud' },
        { text: 'AWS', href: '/platform/aws' },
        { text: 'Azure', href: '/platform/azure' },
        { text: 'GCP', href: '/platform/gcp' },
        { text: 'VMWare', href: '/platform/vmware' },
        { text: 'Backup', href: '/platform/backup' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/digizus/website' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://digizus.com/"> GigiZus</a> · All rights reserved.
  `,
};
