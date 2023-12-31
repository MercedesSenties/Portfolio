import Head from "next/head";

function PagesMetaHead({ title, keywords, description }) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="keywords"
        content={keywords}
      />
      <meta
        name="description"
        content={description}
      />
      <meta charSet="utf-8" />
      <link
        rel="icon"
        href="/favicon.ico"
      />
      <title>{title}</title>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "AM Portfolio",
  keywords: "next.js, react, web, ui, portfolio",
  keywords: "programmer and community manager",
};

export default PagesMetaHead;
