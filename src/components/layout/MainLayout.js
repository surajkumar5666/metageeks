"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import Header2 from "@/components/header/Header2";
import Breadcrumb from "./Breadcrumb";
import Footer from "../footer/Footer";
import Home1Contact from "../contact/Home1Contact";

const MainLayout = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname

  const hideBreadcrumbRoutes = [
    "/shop",
    "/cechkout",
    "/cart",
    "/product-details",
    "/contact-us",
    "/about-us",
  ]; // Add the routes where you want to hide the breadcrumb

  const shouldRenderBreadcrumb = !hideBreadcrumbRoutes.some(
    (route) => route === pathname
  );
  const words = ["service", "blog", "case-study"];
  const regex = new RegExp(`^/(${words.join("|")})/.*$`);

  return (
    <>
      <Header2 />
      {/* {!words.some((word) => pathname.startsWith(`/${word}`)) && <Breadcrumb />} */}
      {!regex.test(pathname) && <Breadcrumb />}
      {children}
      {shouldRenderBreadcrumb && <Home1Contact />}
      <Footer />
    </>
  );
};

export default MainLayout;
