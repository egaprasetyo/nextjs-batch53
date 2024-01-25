import Layout from "@/layout";
import { useEffect } from "react";

export default function Home({ children }) {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

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
