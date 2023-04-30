import Head from 'next/head';
import PageTitle from '~/components/page-title';
import WrapperAos from '~/components/wrapper-aos';
import { APP_CONFIGS } from '~/constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>{APP_CONFIGS.name}</title>
      </Head>
      <WrapperAos>
        <PageTitle title="About Me">
          <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
            <div className="col-span-12 space-y-2.5">
              <div className="lg:mr-16">
                <p className="text-gray-lite dark:text-color-910 leading-7">
                  I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web
                  development and print media. I enjoy turning complex problems into simple,
                  beautiful and intuitive designs.
                </p>
                <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                  My aim is to bring across your message and identity in the most creative way. I
                  created web design for many famous brand companies.
                </p>
              </div>
            </div>
          </div>
        </PageTitle>
      </WrapperAos>
    </>
  );
}
