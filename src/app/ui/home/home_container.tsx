"use client";

import Footer from "@/app/ui/footer";
// import ScrollButton from "@/app/ui/scroll_button";
// import { useRef, useEffect, useState } from "react";

export default function HomeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  // const footerRef = useRef<HTMLDivElement>(null);
  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   if (footerRef.current) {
  //     setOffset(footerRef.current.offsetTop);
  //   }
  // }, []);

  return (
    <>
      <main className="font-sans w-full">
        {children}
        {/* <ScrollButton footerOffset={offset} /> */}
      </main>
      {/* <div ref={footerRef}> */}
      <Footer />
      {/* </div> */}
    </>
  );
}
