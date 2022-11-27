import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: '100px',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: '50px',
    },
  },
  typewriter: {
    height: '110px',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: '60px',
    },
  },
}));

export default useStyles;
