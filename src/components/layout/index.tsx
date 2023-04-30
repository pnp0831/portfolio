import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import { useRouter } from 'next/router';
import { APP_ROUTE } from '~/constants';
import Profile from './profile';

const Layout = memo(({ children }) => {
  const router = useRouter();

  const isBlog = router.pathname.startsWith(APP_ROUTE.BLOG);

  if (isBlog) {
    return (
      <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
        <div className="z-50 ">
          <div className="container">
            <Header horizontal />
          </div>
        </div>
        {children}
      </div>
    );
  }

  return (
    <section className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed dark:bg-homeTwoBg-dark md:pb-16 w-full">
      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:pt-[200px]">
        <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky">
          <Profile />
        </div>
        <div className="col-span-12 lg:col-span-8 ">
          <Header />
          <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">{children}</div>
        </div>
      </div>
    </section>
  );
});

Layout.propTypes = {};

export default Layout;
