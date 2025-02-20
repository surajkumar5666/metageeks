export const serviceHero = {
  name: "serviceHero",
  title: "Service Hero",
  type: "document",

  fields: [
    {
      name: "intoHeading",
      title: "Intro Heading",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "planHeading",
      title: "Plan Heading",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "heading",
      title: "Heading",
      type: "object",
      fields: [
        {
          name: "boldText",
          title: "Bold Text",
          type: "string",
        },
        {
          name: "text",
          title: "Text",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "planHeading",
        maxLength: 96,
      },
    },

    {
      name: "paragraph",
      title: "Paragraph",
      type: "text",
      validation: (Rule) => Rule.required().error("Required"),
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
      title: "Main Image",
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
      name: "faqImage",
      title: "Faq Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "faqImageAlt",
      title: "Faq image alt",
      type: "string",
    },
    {
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "serviceProcess",
      title: "Service Process",
      type: "reference",
      to: [{ type: "serviceProcess" }],
    },
    {
      name: "serviceFeature",
      title: "Service Feature",
      type: "reference",
      to: [{ type: "serviceProcess" }],
    },
    {
      name: "serviceTechStack",
      title: "Service Tech Stack",
      type: "reference",
      to: [{ type: "serviceTechStack" }],
    },
    {
      name: "ServiceMetadata",
      title: "Service Metadata",
      type: "reference",
      to: [{ type: "metadata" }],
    },
  ],
};
