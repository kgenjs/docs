import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import components from '../utils/mdx';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>KGen Docs</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/kgen.png" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            primaryColor: 'indigo',
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <MDXProvider components={components as any}>
              <Component {...pageProps} />
            </MDXProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
