import Layout from "@/layout";

export default function Home({ children }) {
  return (
    <>
      <Layout
        metaTitle="Welcome to Home"
        metaDescription="this is your home page"
      >
        <p>Content</p>
      </Layout>
    </>
  );
}
