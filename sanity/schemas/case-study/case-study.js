export const caseStudy = {
  name: "caseStudy",
  title: "Case Study",
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
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "industry",
      title: "Industry",
      type: "string",
    },
    {
      name: "stack",
      title: "Stack",
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
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
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
      name: "caseStudyMetadata",
      title: "Case Study Metadata",
      type: "reference",
      to: [{ type: "metadata" }],
    },
  ],
};
