export const industry = {
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "url",
    },
    {
      name: "mainImageAlt",
      title: "Main image alt",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
    {
      name: "industryMetadata",
      title: "Industry MetaData",
      type: "reference",
      to: [{ type: "metadata" }],
    },
    {
      name: "relatedCaseStudies",
      title: "Related Case Studies",
      type: "reference",
      to: [{ type: "caseStudy" }],
    },
  ],
};
