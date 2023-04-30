import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect } from 'react';
import Layout from '~/components/layout';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function App({ Component, pageProps }: AppProps) {
  const { setTheme, ...rest } = useTheme();

  useEffect(() => {
    // setTheme('light');
    console.log('render');
    // document.documentElement.classList.remove('dark');
    // document.documentElement.classList.add('light');
    // document.documentElement.style['color-schema'] = 'light';
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
