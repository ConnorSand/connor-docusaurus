import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ConOps',
  tagline: '',
  favicon: 'img/conops.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'connorSand', // Usually your GitHub org/user name.
  projectName: 'connor-docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/connorSand/connor-docusaurus/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/connorSand/connor-docusaurus/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      defaultMode: 'dark',
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ConOps',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ConOps.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'awsSidebar',
          position: 'left',
          label: 'AWS',
        },
        {
          type: 'docSidebar',
          sidebarId: 'devopsSidebar',
          position: 'left',
          label: 'DevOps',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/connorSand/connor-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'AWS', to: '/docs/aws/intro' },
            { label: 'DevOps', to: '/docs/devops/intro' },
          ]
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            {
              label: 'GitHub',
              href: 'https://github.com/connorSand/connor-docusaurus'
            }
          ]
        },
        {
          title: 'Certifications',
          items: [
            { label: 'AWS Solutions Architect - Associate (Soon)', to: '#' }, 
            { label: 'Terraform Certification', href: 'https://www.credly.com/badges/7f6be4e1-b0e0-4b87-9bed-5f412bbd5e73' }
          ]
        }
      ],
      copyright: 'Copyright © 2024 ConOps, Built with Docusaurus.'
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
