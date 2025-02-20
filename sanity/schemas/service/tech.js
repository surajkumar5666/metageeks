export const serviceTechStack = {
  name: "serviceTechStack",
  title: "Service Tech Stack",
  type: "document",

  fields: [
    {
      name: "subheading",
      title: "Subheading",
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
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
              validation: (Rule) => Rule.required().error("Required"),
            },
            {
              name: "icon",
              title: "Icon",
              type: "url",
              validation: (Rule) => Rule.required().error("Required"),
            },
          ],
        },
      ],
    },
  ],
};
