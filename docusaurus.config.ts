import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'connor.cloud',
  tagline: 'Your personal tagline here',
  favicon: 'img/logo.svg',

  organizationName: 'ConnorSand',
  projectName: 'connor-docusaurus.github.io',
  deploymentBranch: 'build',
  trailingSlash: false,

  url: 'https://connor.cloud', // Change this to your actual domain
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/connor-docusaurus/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'connor.cloud',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://www.linkedin.com/in/connor-sanderson',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Certifications',
          items: [
            {
              html: `
                <a href="https://www.credly.com/badges/deb2a12a-1d33-446a-aff3-dabd7b50656a" target="_blank" rel="noreferrer noopener" aria-label="AWS Solutions Architect">
                  <img src="img/aws_solutions_architect.png" alt="AWS Solutions Architect" class="certification-image" />
                </a>
              `,
            },
            {
              html: `
                <a href="https://www.credly.com/badges/7f6be4e1-b0e0-4b87-9bed-5f412bbd5e73" target="_blank" rel="noreferrer noopener" aria-label="Terraform Associate">
                  <img src="img/terraform.png" alt="Terraform Associate" class="certification-image" />
                </a>
              `,
            }
          ],
        }
      ],
      copyright: 'Built with Docusaurus.'
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;