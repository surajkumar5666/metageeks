export const serviceProcess = {
  name: "serviceProcess",
  title: "Service Process",
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
      name: "extraText",
      title: "Extra Text",
      type: "string",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "process",
      title: "Process",
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
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required().error("Required"),
            },
            {
              name: "icon",
              title: "Icon",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
};
