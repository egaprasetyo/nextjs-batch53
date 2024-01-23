import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children, metaTitle, metaDescription }) {
  return (
    <>
      <Head>
        <title>
          {`Create Next App - ${metaTitle || "this is default meta title"}`}
        </title>
        <meta
          name="description"
          content={`${metaDescription || "this is default meta description"}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        className="text-center h-[calc(100vh-6rem)] flex items-center justify-center bg-slate-500"
        style={{
          height: "calc(100vh - 6rem)",
          backgroundColor: "rgb(100 116 139)",
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
