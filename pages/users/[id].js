import Layout from "@/layout";
import { useRouter } from "next/router";
import React from "react";

export default function UsersByName() {
  const router = useRouter();
  const { id } = router?.query;

  return (
    <>
      <Layout>
        <p>this is user: {id}</p>
      </Layout>
    </>
  );
}
