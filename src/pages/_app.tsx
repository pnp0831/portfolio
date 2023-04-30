import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect } from 'react';
import Layout from '~/components/layout';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Fake = ({ children }) => {
  const { setTheme, ...rest } = useTheme();

  useEffect(() => {
    setTheme('light');
    console.log('rest', rest);
  }, []);

  return children;
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Fake>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Fake>
    </ThemeProvider>
  );
}
