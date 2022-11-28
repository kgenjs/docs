import {
  createStyles,
  Grid,
  Group,
  Paper,
  Space,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AppContainer from '../AppContainer';
import sidebarData from '../AppContainer/sidebarData';

export type MarkdownContainerProps = {
  meta: {
    title: string;
    overview: string;
  };
  children: React.ReactNode;
};

const useMarkdownContainerStyles = createStyles((theme) => ({
  navigationButton: {
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[1]}`,
    padding: theme.spacing.lg,
    width: '100%',
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },
}));

const MarkdownContainer = (props: MarkdownContainerProps) => {
  const theme = useMantineTheme();
  const router = useRouter();
  const { classes } = useMarkdownContainerStyles();
  let currentPageIdx = 0;
  let currentSectionIdx = 0;

  for (let i = 0; i < sidebarData.length; i += 1) {
    let found = false;
    for (let j = 0; j < sidebarData[i].links.length; j += 1) {
      if (sidebarData[i].links[j].link === router.pathname) {
        currentSectionIdx = i;
        currentPageIdx = j;
        found = true;
        break;
      }
    }
    if (found) break;
  }

  const previousSection =
    currentSectionIdx !== 0 || currentPageIdx !== 0
      ? currentPageIdx === 0
        ? sidebarData[currentSectionIdx - 1]
        : sidebarData[currentSectionIdx]
      : null;

  const previousLink = previousSection
    ? currentPageIdx === 0
      ? previousSection.links[previousSection.links.length - 1]
      : previousSection.links[currentPageIdx - 1]
    : null;

  const nextSection =
    currentSectionIdx !== sidebarData.length - 1 ||
    currentPageIdx !== sidebarData[currentSectionIdx].links.length - 1
      ? currentPageIdx === sidebarData[currentSectionIdx].links.length - 1
        ? sidebarData[currentSectionIdx + 1]
        : sidebarData[currentSectionIdx]
      : null;

  const nextLink = nextSection
    ? currentPageIdx === sidebarData[currentSectionIdx].links.length - 1
      ? nextSection.links[0]
      : nextSection.links[currentPageIdx + 1]
    : null;

  return (
    <AppContainer>
      <Head>
        <title>{props.meta.title} - KGen</title>
      </Head>
      <Paper radius="md" p="xl" style={{ margin: '0px !important' }}>
        <Title size={50}>{props.meta.title}</Title>
        <Space h={20} />
        <Text color={theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[7]}>
          {props.meta.overview}
        </Text>
        <Space h={20} />
        {props.children}
      </Paper>
      <Space h={30} />
      <Grid gutter="lg">
        {previousLink && (
          <Grid.Col xs={12} sm={6}>
            <UnstyledButton
              className={classes.navigationButton}
              onClick={() => router.push(previousLink.link)}
            >
              <Group position="apart">
                <IconArrowLeft />
                <div style={{ textAlign: 'right' }}>
                  <Title order={4}>Go back</Title>
                  <Text>
                    {previousSection?.label} - {previousLink.label}
                  </Text>
                </div>
              </Group>
            </UnstyledButton>
          </Grid.Col>
        )}
        {nextLink && (
          <Grid.Col xs={12} sm={6}>
            <UnstyledButton
              className={classes.navigationButton}
              onClick={() => router.push(nextLink.link)}
            >
              <Group position="apart">
                <div style={{ textAlign: 'left' }}>
                  <Title order={4}>Up next</Title>
                  <Text>
                    {nextSection?.label} - {nextLink.label}
                  </Text>
                </div>
                <IconArrowRight />
              </Group>
            </UnstyledButton>
          </Grid.Col>
        )}
      </Grid>
    </AppContainer>
  );
};

export default MarkdownContainer;
