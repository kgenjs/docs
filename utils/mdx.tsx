import { Blockquote, Code, createStyles, Divider, Image, List, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { Prism } from '@mantine/prism';

const MDXText = (props: { children: React.ReactNode }) => <Text my={10}>{props.children}</Text>;

const MDXBold = (props: { children: React.ReactNode }) => (
  <Text my={10} fw={700}>
    {props.children}
  </Text>
);

const MDXItalic = (props: { children: React.ReactNode }) => (
  <Text my={10} fs="italic">
    {props.children}
  </Text>
);

const MDXLink = (props: { href: string; children: React.ReactNode }) => (
  <Text component={NextLink} href={props.href} variant="link" inline>
    {props.children}
  </Text>
);

const MDXListUnordered = (props: { children: React.ReactNode }) => (
  <List type="unordered">{props.children}</List>
);

const MDXListOrdered = (props: { children: React.ReactNode }) => (
  <List type="ordered">{props.children}</List>
);

const MDXListItem = (props: { children: React.ReactNode }) => (
  <List.Item mt={4}>{props.children}</List.Item>
);

const MDXDivider = () => <Divider my={20} />;

const useHeaderStyles = createStyles((theme) => ({
  title: {
    marginTop: theme.spacing.xl * 1.2,
    marginBottom: theme.spacing.md,
    wordBreak: 'break-word',
    fontFamily: theme.fontFamily,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  link: {
    ...theme.fn.focusStyles(),
    textDecoration: 'none',
    color: 'inherit',
  },

  offset: {
    position: 'relative',
    top: -62,
  },
}));

const MDXHeaderComponent = ({
  id,
  children,
  order,
  ...others
}: React.ComponentPropsWithoutRef<typeof Title>) => {
  const { classes } = useHeaderStyles();

  if (order === 1) {
    return (
      <Title className={classes.title} sx={{ fontWeight: 900, fontSize: 44 }}>
        {children}
      </Title>
    );
  }

  return (
    <>
      <div id={id} className={classes.offset} />
      <Title order={order} className={classes.title} sx={{ fontWeight: 600 }} {...others}>
        <a className={classes.link} href={`#${id}`}>
          {children}
        </a>
      </Title>
    </>
  );
};

const MDXHeader = (order: 1 | 2 | 3 | 4 | 5 | 6) => (props: any) =>
  <MDXHeaderComponent order={order} {...props} />;

const MDXCodeBlock = (props: any) => {
  const matches = (props.children.props.className || '').match(/language-(?<lang>.*)/);

  return (
    <Prism
      language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}
      mb={20}
    >
      {props.children.props.children}
    </Prism>
  );
};

const components = {
  img: Image,
  p: MDXText,
  code: Code,
  a: MDXLink,
  ul: MDXListUnordered,
  ol: MDXListOrdered,
  li: MDXListItem,
  hr: MDXDivider,
  blockquote: Blockquote,
  strong: MDXBold,
  i: MDXItalic,
  h1: MDXHeader(1),
  h2: MDXHeader(2),
  h3: MDXHeader(3),
  h4: MDXHeader(4),
  h5: MDXHeader(5),
  h6: MDXHeader(6),
  pre: MDXCodeBlock,
};

export default components;
