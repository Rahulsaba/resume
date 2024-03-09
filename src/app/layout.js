import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rahul Reaume",
  description: "Online Resume Generator ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://rahulsabaresume.netlify.app/public/vercel.svg"
        />
      </Head>
      <body className={'flex min-h-screen flex-col  pt-10 pr-36 pl-36'}>
        <AntdRegistry>

          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
