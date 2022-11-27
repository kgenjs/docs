import { Button, Container, Grid, Group, Space, Text } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { IconBolt, IconBrandGithub, IconBulb, IconMoodSmileBeam } from '@tabler/icons';
import AppContainer from '../components/AppContainer';
import FeatureCard from '../components/FeatureCard';
import LandingBanner from '../components/LandingBanner';

const features = [
  {
    title: 'Easy to use',
    description:
      'With the ease of use as the top priority, KGen provides a human-friendly CLI to help you bootstrap a modern project in no time.',
    icon: IconMoodSmileBeam,
  },
  {
    title: 'Powerful templates',
    description:
      'KGen allows you to create a new template from scratch with zero configuration, or all customizations you want.',
    icon: IconBulb,
  },
  {
    title: 'Fully customizable',
    description:
      'The ultimate power of Node.js allows KGen to create a beautiful template generation engine that allows template authors to do tons of customizations.',
    icon: IconBolt,
  },
];

export default function HomePage() {
  return (
    <>
      <AppContainer showSidebar={false}>
        <Container mt={50}>
          <LandingBanner />
          <Space h={30} />
          <Text size="lg">
            Instantly create a fully-featured starter project on-the-fly with KGen. With powerful
            extensionble templates, KGen can do more than ever. With the power of open source, KGen
            will be able to generate projects from various languages.
          </Text>
          <Space h={30} />
          <Grid>
            {features.map((feature, index) => (
              <Grid.Col xs={12} sm={4} key={index}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </Grid.Col>
            ))}
          </Grid>
          <Space h={40} />
          <Group>
            <Button
              size="xl"
              radius="lg"
              w={170}
              component={NextLink}
              href="/docs/getting-started/introduction"
            >
              Get started
            </Button>
            <Button
              size="xl"
              radius="lg"
              variant="light"
              leftIcon={<IconBrandGithub />}
              w={170}
              component="a"
              href="https://github.com/kgenjs/kgen"
              target="_blank"
            >
              GitHub
            </Button>
          </Group>
        </Container>
        <Space h={120} />
      </AppContainer>
    </>
  );
}
