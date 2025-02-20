import { client } from "../../../sanity/lib/client";

const getMetaData = async () => {
  const query = `*[_type == "metadata" && metadataFor=="about"]{
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

const layout = async ({ children }) => {
  return children;
};

export let metadata = async () => {
  const data = await getMetaData();

  const fetchedMetadata = {
    title: data.title || "Default ",
    description: data.description || "Default Description",
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

export default layout;
