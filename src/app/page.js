"use client";
import Home5Partnerships from "@/components/Partnerships/Home5Partnerships";
import Home5About from "@/components/about/Home5About";
import Home5Banner from "@/components/banner/Home5Banner";
import Home5Blog from "@/components/blog/Home5Blog";
import Home5Contact from "@/components/contact/Home5Contact";
import Footer from "@/components/footer/Footer";
import Header1 from "@/components/header/Header1";
import Home5BannerMarque from "@/components/marquee/Home5BannerMarque";
import Home5Portfolio from "@/components/portfolio/Home5Portfolio";
import Home5Service from "@/components/service/Home5Service";
import Home5Team from "@/components/team/Home5Team";
import Home5Testimonial from "@/components/testimonial/Home5Testimonial";
import Home5whyChoose from "@/components/why-choose/Home5whyChoose";
import HomeWorkProcess from "@/components/workProcess/HomeWorkProcess";
import useWow from "@/hooks/useWow";
import HomeTeam from "@/components/team/HomeTeam";
//
const Home = () => {
  useWow();
  return (
    <>
      <Header1 />
      <Home5Banner />
      <Home5BannerMarque />
      <Home5Partnerships />
      <Home5About />
      <Home5Service />
      <Home5Portfolio />
      <Home5Testimonial />
      <HomeWorkProcess />
      <Home5whyChoose />
      <HomeTeam />
      <Home5Blog />
      <Home5Contact />
      <Footer />
    </>
  );
};

export default Home;
