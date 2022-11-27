import { Paper, Space, Text, Title, useMantineTheme } from '@mantine/core';
import AppContainer from '../AppContainer';

export type MarkdownContainerProps = {
  meta: {
    title: string;
    overview: string;
  };
  children: React.ReactNode;
};

const MarkdownContainer = (props: MarkdownContainerProps) => {
  const theme = useMantineTheme();
  return (
    <AppContainer>
      <Paper radius="md" p="xl" style={{ margin: '0px !important' }}>
        <Title size={50}>{props.meta.title}</Title>
        <Space h={20} />
        <Text color={theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[7]}>
          {props.meta.overview}
        </Text>
        <Space h={20} />
        {props.children}
      </Paper>
    </AppContainer>
  );
};

export default MarkdownContainer;
