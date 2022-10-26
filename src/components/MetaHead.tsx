import Head from 'next/head';

function MetaHead() {
  return (
    <Head>
      <title>Travelus</title>
      <meta
        name={'viewport'}
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0"
      />
      <meta name="description" content="나만의 여행계획 추천 서비스" />
      <meta property="og:image" key="ogimage" content="https://mytravelus.vercel.app/og_img.png" />
      <meta property="og:title" key="ogtitle" content="Travelus" />
      <meta property="og:description" key="ogdesc" content="나만의 여행계획 추천 서비스" />
      <meta property="og:url" key="ogurl" content="https://mytravelus.vercel.app/" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favi/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favi/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favi/favicon-16x16.png" />
    </Head>
  );
}

export default MetaHead;
