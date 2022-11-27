import { Badge, Text, Title } from '@mantine/core';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import useStyles from './LandingBanner.styles';

const colors = {
  JavaScript: {
    from: 'yellow',
    to: 'orange',
    deg: 45,
  },
  TypeScript: {
    from: 'blue',
    to: 'indigo',
    deg: 45,
  },
  Python: {
    from: 'cyan',
    to: 'yellow',
    deg: 30,
  },
  'C/C++': {
    from: 'red',
    to: 'grape',
    deg: 90,
  },
  Rust: {
    from: 'orange',
    to: 'gray',
    deg: 30,
  },
};

const LandingBanner = () => {
  const { classes } = useStyles();
  const [currentColor, setCurrentColor] = useState({
    from: 'indigo',
    to: 'cyan',
    deg: 45,
  });
  return (
    <>
      <Badge size="xl">KGEN</Badge>
      <Title className={classes.title}>
        The Ultimate
        <Text inline variant="gradient" gradient={currentColor} className={classes.typewriter}>
          <Typewriter
            onInit={(typewriter) => {
              Object.keys(colors).forEach((color) => {
                typewriter
                  .callFunction(() => {
                    setCurrentColor(colors[color as keyof typeof colors]);
                  })
                  .typeString(color)
                  .pauseFor(2000)
                  .deleteAll();
              });
              typewriter.start();
            }}
            options={{ loop: true }}
          />
        </Text>
        Project generator.
      </Title>
    </>
  );
};

export default LandingBanner;
