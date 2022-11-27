import { Box, Collapse, createStyles, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { IconChevronLeft, IconChevronRight, TablerIcon } from '@tabler/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,
    transition: 'all 100ms',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
    paddingLeft: 26,
    marginLeft: 25,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    transition: 'all 100ms',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  // eslint-disable-next-line react/no-unused-prop-types
  baseLink: string;
}

export const LinksGroup = ({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) => {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const router = useRouter();
  const [opened, setOpened] = useState(initiallyOpened ?? false);
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;

  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component={NextLink}
      className={`${classes.link} ${router.pathname === link.link && classes.linkActive}`}
      href={link.link}
      key={link.label}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)` : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};

export type NavbarLinksGroupProps = {
  data: LinksGroupProps[];
};

const NavbarLinks = (props: NavbarLinksGroupProps) => {
  const router = useRouter();

  return (
    <>
      {props.data.map((data, index) => (
        <Box
          sx={(theme) => ({
            padding: theme.spacing.md,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          })}
          key={index}
          m={0}
          p={0}
        >
          <LinksGroup {...data} initiallyOpened={router.pathname.startsWith(data.baseLink)} />
        </Box>
      ))}
    </>
  );
};

export default NavbarLinks;
