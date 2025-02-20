export const hero = {
  name: "hero",
  title: "Hero",
  type: "document",

  fields: [
    {
      name: "subheading",
      title: "Subheading",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
    },
    // {
    //   name: "heading",
    //   title: "Heading",
    //   type: "string",
    //   validation: (Rule) => Rule.required().error("Required"),
    // },
    {
      name: "heading",
      title: "Heading",
      type: "object",
      fields: [
        {
          name: "beforeSpan",
          title: "Before Span",
          type: "string",
        },
        {
          name: "span",
          title: "Span",
          type: "string",
        },
        {
          name: "afterSpan",
          title: "After Span",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required().error("Required"),
    },

    {
      name: "paragraph",
      title: "Paragraph",
      type: "text",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "cta",
      title: "CTA",
      type: "text",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "scrollDownBtn",
      title: "Scroll Down Button Link",
      type: "text",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "video",
      title: "Video Link",
      type: "url",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "image",
      title: "Image Link",
      type: "url",
      validation: (Rule) => Rule.required().error("Required"),
    },
  ],
};
