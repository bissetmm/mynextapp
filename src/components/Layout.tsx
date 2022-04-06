import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>MyTemplate</title>
      </Head>

      <header className=''>
        <Link href='/'>
          <a>Header</a>
        </Link>
      </header>

      <div className='content'>{children}</div>

      <footer className=''>Footer</footer>
    </div>
  );
};

export default Layout;
