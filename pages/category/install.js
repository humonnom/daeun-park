import Link from "next/link";
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>Sculpture Page</title>
    </Head>
    <h1>Sculpture Page</h1>
    <div>
      <Link href='/main'>
        <a>back</a>
      </Link>
    </div>
  </div>
);
