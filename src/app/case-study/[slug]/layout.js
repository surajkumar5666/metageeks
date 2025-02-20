import { client } from "../../../../sanity/lib/client";

const getCaseStudy = async (slug) => {
  const query = `
   *[_type=="caseStudy" && slug.current=="${slug}"]{
      caseStudyMetadata->{
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

  const response = await client.fetch(query, { revalidate: 1 });
  // console.log(response);
  return response[0];
};
let slug = "";
const layout = async ({ children, params }) => {
  slug = params.slug;

  return children;
};

export default layout;
export let metadata = async () => {
  const caseStudy = await getCaseStudy(slug);
  const data = caseStudy?.caseStudyMetadata;

  const fetchedMetadata = {
    title: data?.title || "Service Details",
    description: data?.description || "Default Description",
    canonical: data?.canonical || "",
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
