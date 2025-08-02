"use client";

import { useState, useEffect } from "react";
import Preloader from "@components/Pre";
import Home from "@components/Home/Home";
import ScrollToTop from "@components/ScrollToTop";

export default function HomePage() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <ScrollToTop />
        <Home/>
      </div>
    </>
  );
}

