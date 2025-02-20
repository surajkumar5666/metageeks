import { client } from "../../../../sanity/lib/client";

async function getPost(slug) {
  const query = `
    *[_type=="industry" && slug.current=="${slug}"]{
    title,
    description,
    blogMetadata->{
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
    }
  } 
  `;

  const response = await client.fetch(query, { cache: "no-store" });
  return response[0];
}
let slug = "";
const layout = async ({ children, params }) => {
  slug = params.slug;

  return children;
};

export default layout;
export let metadata = async () => {
  const blog = await getPost(slug);
  const data = blog?.blogMetadata;

  const fetchedMetadata = {
    title: blog?.title || "Default ",
    description: blog?.description || "Default Description",
    canonical: data?.canonical || "",
    openGraph: {
      url: data?.openGraph?.url || "",
      title: data?.openGraph?.title || "",
      description: data?.openGraph?.description || "",
      images: data?.openGraph?.images || [],
      siteName: data?.openGraph?.siteName || "Default Site Name",
    },
    twitter: {
      handle: data?.twitter?.handle || "@handle",
      site: data?.twitter?.site || "@site",
      cardType: data?.twitter?.cardType || "summary_large_image",
    },
  };
  return fetchedMetadata;
};
