import { createStyles, Group, Image, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    textDecoration: 'none',
  },
}));

const KGenLogo = () => {
  const { classes } = useStyles();

  return (
    <Group className={classes.logo}>
      <Image width={30} src="/kgen.png" />
      <Title order={3}>KGen</Title>
    </Group>
  );
};

export default KGenLogo;
