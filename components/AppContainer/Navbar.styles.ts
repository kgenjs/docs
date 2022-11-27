import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  burger: {
    display: 'none',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'block',
    },
  },
  sidebarItemControl: {
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,
    transition: 'all 0.1s',
    '&:hover': {
      color: theme.colors[theme.primaryColor][6],
    },
  },
}));

export default useStyles;
