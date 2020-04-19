import Link from "next/link";
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>Text Page</title>
    </Head>
    <h1>Text Page</h1>
    <div>
      <Link href='/main'>
        <a>back</a>
      </Link>
    </div>
  </div>
);
