import { Inter, Roboto_Mono, Hanken_Grotesk } from "next/font/google";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap-datetimepicker.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import { client } from "../../sanity/lib/client";
import BootstrapStyleWrapper from "@/components/BoostrapStyleWarapper";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import * as uuid from 'uuid';
import Chatbot from "@/components/chatbot/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hankenGrotesk",
  display: "swap",
});

const getMetaData = async () => {
  const query = `*[_type == "metadata" && metadataFor=="home"]{
      title,
      description,
      canonical,
      openGraph{
        url,
        title,
        description,
        images[]{
          url,
          width,
          height,
          alt,
          type
        },
        siteName
      },
      twitter{
        handle,
        site,
        cardType
      }
    }`;

  const response = await client.fetch(query, { cache: "no-store" });
  // console.log(response);
  return response[0];
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${hankenGrotesk.variable}`}>
      <head>
        <link
          rel="icon"
          href="/public/assets/img/sm-logo.svg"
          type="image/x-icon"
          sizes="16x16"
        />
      </head>
      <body>
        <BootstrapStyleWrapper>{children}</BootstrapStyleWrapper>

        <Chatbot/>
      </body>
      {/* <GoogleAnalytics gaId="G-F99PDVQRH5" /> */}
      <GoogleTagManager gtmId="GTM-K5VV2K23" />

      <Script
        type="text/javascript"
        src="https://widget.clutch.co/static/js/widget.js"
      ></Script>
    </html >
  );
}

export let metadata = async () => {
  const data = await getMetaData();

  // console.log(data);

  const fetchedMetadata = {
    title: data.title || "MetaGeeks ",
    description: data.description || "MetaGeeks ",
    canonical: data.canonical || "",
    openGraph: {
      url: data.openGraph?.url || "",
      title: data.openGraph?.title || "",
      description: data.openGraph?.description || "",
      images: data.openGraph?.images || [],
      siteName: data.openGraph?.siteName || "Default Site Name",
    },
    twitter: {
      handle: data.twitter?.handle || "@handle",
      site: data.twitter?.site || "@site",
      cardType: data.twitter?.cardType || "summary_large_image",
    },
  };

  return fetchedMetadata;
};
