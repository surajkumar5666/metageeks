import FeaturesPage from "./Features";

export const metadata = {
  title: "Features",
  description: "Example Description",
  canonical: "",
  openGraph: {
    url: "",
    title: "",
    description: "",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
      {
        url: "",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second",
        type: "image/jpeg",
      },
    ],
    siteName: "SiteName",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

const page = () => {
  return <FeaturesPage />;
};

export default page;
