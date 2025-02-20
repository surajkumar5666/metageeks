import { client } from "../../sanity/lib/client";

const url = process.env.NEXT_PUBLIC_APP_URL;

export default async function sitemap() {
  const getPost = async () => {
    const query = `
    *[_type == "blog" ]{
      slug   
    }
  `;
    const response = await client.fetch(query);
    return response;
  };
  const getCaseStudies = async () => {
    const query = `
    *[_type=="caseStudy"]{
    slug
    }
    `;

    const response = await client.fetch(query);
    return response;
  };

  const getServices = async () => {
    const query = `
    *[_type == "serviceHero"] {
        slug
    }
  `;

    const response = await client.fetch(query);
    return response;
  };

  const posts = await getPost();
  const postUrls = posts.map((post) => {
    return {
      url: `${url}/blog/${post.slug.current}`,
      lastModified: new Date(),
    };
  });

  const caseStudies = await getCaseStudies();
  const caseStudyUrls = caseStudies.map((caseStudy) => {
    return {
      url: `${url}/case-study/${caseStudy.slug.current}`,
      lastModified: new Date(),
    };
  });

  const services = await getServices();
  const serviceUrls = services.map((service) => {
    return {
      url: `${url}/service/${service.slug.current}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: url,
      lastModified: new Date(),
    },
    {
      url: ` ${url}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${url}/blog`,
      lastModified: new Date(),
    },
    ...postUrls,
    {
      url: `${url}/case-study`,
      lastModified: new Date(),
    },
    ...caseStudyUrls,
    {
      url: `${url}/contact-us`,
      lastModified: new Date(),
    },
    {
      url: `${url}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${url}/industry`,
      lastModified: new Date(),
    },
    {
      url: `${url}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${url}/support-policy`,
      lastModified: new Date(),
    },
    {
      url: `${url}/thank-you`,
      lastModified: new Date(),
    },
    {
      url: `${url}/terms-and-conditions`,
      lastModified: new Date(),
    },
    {
      url: `${url}/service`,
      lastModified: new Date(),
    },
    ...serviceUrls,
  ];
}
