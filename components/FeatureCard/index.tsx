import { Group, Text, ThemeIcon, Title } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';

export type FeatureCardProps = {
  title: string;
  description: string;
  icon: TablerIcon;
};

const FeatureCard = (props: FeatureCardProps) => {
  const Icon = props.icon;

  return (
    <Group>
      <ThemeIcon size="xl" variant="gradient">
        <Icon size={20} />
      </ThemeIcon>
      <Group>
        <Title order={4}>{props.title}</Title>
        <Text color="dimmed">{props.description}</Text>
      </Group>
    </Group>
  );
};

export default FeatureCard;
