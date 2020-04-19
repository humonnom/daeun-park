import Link from "next/link";
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>CV Page</title>
    </Head>
    <h1>CV Page</h1>
    <div>
      <Link href='/main'>
        <a>Main</a>
      </Link>
    </div>
  </div>
);
