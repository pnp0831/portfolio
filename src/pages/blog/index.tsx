import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '~/components/page-title';
import WrapperAos from '~/components/wrapper-aos';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { APP_ROUTE } from '~/constants';

const Blog = memo((props) => {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <WrapperAos>
        <div className="px-4 sm:px-5 md:px-10 lg:px-[60px]">
          <div className="py-12">
            <h2 className="after-effect after:left-32 mt-12 lg:mt-0">Blogs</h2>
            <div className="grid gap-x-10 gap-y-7 mb-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[40px]">
              {Array.from(Array(5)).map((_, index) => {
                return (
                  <Link href={`${APP_ROUTE.BLOG}/1`} key={index}>
                    <div
                      key={index}
                      className="p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2"
                      style={{ background: 'rgb(252, 244, 255)' }}
                    >
                      <div className="overflow-hidden rounded-lg">
                        <Image
                          alt="blog"
                          src="/images/blog1.webp"
                          width={310}
                          height={310}
                          decoding="async"
                          data-nimg={1}
                          className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
                          loading="lazy"
                          style={{ color: 'transparent' }}
                        />
                      </div>
                      <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
                        <span>177 April</span>
                        <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                          Inspiration
                        </span>
                      </div>
                      <h3 className="text-lg font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                        How to Own Your Audience by Creating an Email List.
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </WrapperAos>
    </>
  );
});

Blog.propTypes = {};

export default Blog;
