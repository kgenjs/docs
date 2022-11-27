import { IconRocket, IconStar } from '@tabler/icons';

const sidebarData = [
  {
    label: 'Getting Started',
    icon: IconRocket,
    links: [
      { label: 'Introduction', link: '/docs/getting-started/introduction' },
      { label: 'Installation', link: '/docs/getting-started/installation' },
    ],
    baseLink: '/docs/getting-started',
  },
  {
    label: 'Usage',
    icon: IconStar,
    links: [
      {
        label: 'Basic usage',
        link: '/docs/usage/basic',
      },
    ],
    baseLink: '/docs/usage',
  },
];

export default sidebarData;
