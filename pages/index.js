import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect } from "react";

const LayoutComponent = dynamic(() => import("@/layout"));

export default function Home({ children }) {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <LayoutComponent
        metaTitle="Welcome to Home"
        metaDescription="this is your home page"
      >
        <p>Content</p>
        <div>
          <Image
            src="/burger.png"
            width={200}
            height={200}
            alt="image burger"
          />
        </div>
      </LayoutComponent>
    </>
  );
}
