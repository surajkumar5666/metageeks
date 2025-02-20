"use client";
import { useEffect } from "react";
import ScrollProgress from "@/components/common/ScrollProgress";
import useWow from "@/hooks/useWow";
import { ToastContainer } from "react-toastify";

export default function BootstrapStyleWrapper({ children }) {
  useWow();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      {/* <ScrollProgress /> */}
      {children}
      <ToastContainer />
    </div>
  );
}
