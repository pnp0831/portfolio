import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import PageTitle from '~/components/page-title';
import WrapperAos from '~/components/wrapper-aos';
import { APP_CONFIGS } from '~/constants';

export default function BlogDetail() {
  const router = useRouter();
  console.log('router', router);
  return (
    <>
      <Head>
        <title>{APP_CONFIGS.name}</title>
      </Head>
      <WrapperAos>
        <PageTitle title="Blog Detail">
          <div className="pr-3 pb-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              className="text-7xl cursor-pointer absolute right-2 -top-12 md:-right-10 md:-top-6 text-white transition transform hover:rotate-45 duration-300 ease-in-out "
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
            <Image
              alt="blog"
              src="/images/blog1.webp"
              width={700}
              height={400}
              decoding="async"
              data-nimg={1}
              className=" w-full md:h-[450px] object-cover rounded-xl mt-6"
              loading="lazy"
              style={{ color: 'transparent', objectFit: 'contain' }}
            />

            <div className="flex mt-4 text-tiny text-black dark1111:text-white">
              <span>177 April</span>
              <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                Inspiration
              </span>
            </div>
            <h2 className="dark1111:text-white sm:text-3xl mt-2 font-medium">
              How to Own Your Audience by Creating an Email List.
            </h2>
            <p className="dark1111:text-white font-normal text-[15px] sm:text-sm my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus
              porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta
              inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
              magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur
              quo obcaecati rerum sit non.{' '}
            </p>
            <p className="dark1111:text-white font-normal text-[15px] sm:text-sm my-4">
              {' '}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus
              porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta
              inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
              magni quasi sed, sit amet consectetur adipisicing elit. Fuga consequatur delectus
              porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta
              inventore dolorum consequuntur.{' '}
            </p>
            <p className="dark1111:text-white font-normal text-[15px] sm:text-sm my-4">
              {' '}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus
              porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta
              inventore dolorum consequuntur quo obcaecati rerum sit non.{' '}
            </p>
          </div>
          <div className="flex items-center md:justify-end space-x-4 mt-8 mr-3">
            <h6 className="dark1111:text-white text-[20px] ">Share:</h6>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#1773EA]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </span>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#1C9CEA]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </span>
              </a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#e14a84]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" />
                  </svg>
                </span>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#0072b1]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </PageTitle>
      </WrapperAos>
    </>
  );
}
