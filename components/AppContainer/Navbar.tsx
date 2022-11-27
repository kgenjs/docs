import {
  ActionIcon,
  AppShell,
  Burger,
  Center,
  Group,
  Header,
  Navbar as MantineNavbar,
  Transition,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import { IconBook2, IconBrandGithub, IconMoonStars, IconSun } from '@tabler/icons';
import { useEffect, useState } from 'react';
import KGenLogo from '../Logo';
import Footer from './Footer';
import NavbarLinks from './LinksGroup';
import useStyles from './Navbar.styles';
import sidebarData from './sidebarData';

const AppContainer = ({
  children,
  showSidebar = true,
}: {
  children?: React.ReactNode;
  showSidebar?: boolean;
}) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const { classes } = useStyles();
  const mantineTheme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${mantineTheme.breakpoints.sm}px)`);
    const isMobile = mediaQuery.matches;
    if (!isMobile) setSidebarOpened(true);
    mediaQuery.addEventListener('change', (query) => {
      if (query.matches) setSidebarOpened(false);
      else setSidebarOpened(true);
    });
  });

  return (
    <AppShell
      padding="md"
      navbar={
        showSidebar ? (
          <Transition
            mounted={sidebarOpened}
            transition="slide-right"
            duration={200}
            timingFunction="ease"
          >
            {(styles) => (
              <MantineNavbar
                width={{ base: 250 }}
                height="100%"
                style={{ ...styles, zIndex: 0 }}
                pt={20}
              >
                <NavbarLinks data={sidebarData} />
              </MantineNavbar>
            )}
          </Transition>
        ) : (
          <></>
        )
      }
      header={
        <Header height={60} p="xs">
          <Group sx={{ height: '100%' }} px={20} position="apart">
            <Center style={{ height: 40 }} inline>
              <Burger
                opened={sidebarOpened}
                size="sm"
                className={classes.burger}
                mr={12}
                ml={-10}
                onClick={() => setSidebarOpened((o) => !o)}
              />
              <NextLink href="/" style={{ textDecoration: 'none' }}>
                <KGenLogo />
              </NextLink>
            </Center>

            <Group>
              <ActionIcon
                variant="default"
                size="lg"
                component={NextLink}
                href="/docs/getting-started/introduction"
              >
                <IconBook2 size={18} />
              </ActionIcon>
              <ActionIcon variant="default" size="lg">
                <IconBrandGithub size={18} />
              </ActionIcon>
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size="lg">
                {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoonStars size={18} />}
              </ActionIcon>
            </Group>
          </Group>
        </Header>
      }
      footer={
        <Footer
          data={[
            {
              title: 'Documentation',
              links: [
                { label: 'Introduction', link: '/docs/getting-started/introduction' },
                {
                  label: 'Installation',
                  link: '/docs/getting-started/installation',
                },
                {
                  label: 'Basic usage',
                  link: '/docs/usage/basic',
                },
              ],
            },
            {
              title: 'Contact Us',
              links: [
                {
                  label: 'GitHub',
                  link: 'https://github.com/kgenjs/kgen',
                },
              ],
            },
          ]}
        />
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
      style={{ paddingRight: '0px !important' }}
    >
      {children}
    </AppShell>
  );
};

export default AppContainer;
