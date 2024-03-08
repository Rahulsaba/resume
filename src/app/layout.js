import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rahul Resume",
  description: "Online Resume Generator ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'flex min-h-screen flex-col  p-10'}>
      <AntdRegistry>
        {children}
      </AntdRegistry>
        </body>
    </html>
  );
}
