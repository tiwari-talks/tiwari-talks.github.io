module.exports = {
  title: 'Tiwari Talks',
  tagline: 'Tiwari Talks',
  url: 'https://tiwari-talks.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'venomish69', // Usually your GitHub org/user name.
  projectName: 'tiwari-talks', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tiwari Talks',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            
            {
              label: 'Discord',
              href: 'https://discord.gg/dWCBpmhjuE',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/venomish05/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anish Tiwari`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
