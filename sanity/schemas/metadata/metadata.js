export const metadata = {
  name: "metadata",
  type: "document",
  title: "Metadata",
  fields: [
    {
      name: "metadataFor",
      type: "string",
      title: "Metadata For",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "canonical",
      type: "url",
      title: "Canonical URL",
    },
    {
      name: "openGraph",
      type: "object",
      title: "Open Graph",
      fields: [
        {
          name: "url",
          type: "url",
          title: "URL",
        },
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "description",
          type: "text",
          title: "Description",
        },
        {
          name: "images",
          type: "array",
          title: "Images",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "url",
                  type: "url",
                  title: "Image URL",
                },
                {
                  name: "width",
                  type: "number",
                  title: "Width",
                },
                {
                  name: "height",
                  type: "number",
                  title: "Height",
                },
                {
                  name: "alt",
                  type: "string",
                  title: "Alt Text",
                },
                {
                  name: "type",
                  type: "string",
                  title: "Type",
                },
              ],
            },
          ],
        },
        {
          name: "siteName",
          type: "string",
          title: "Site Name",
        },
      ],
    },
    {
      name: "twitter",
      type: "object",
      title: "Twitter",
      fields: [
        {
          name: "handle",
          type: "string",
          title: "Handle",
        },
        {
          name: "site",
          type: "string",
          title: "Site",
        },
        {
          name: "cardType",
          type: "string",
          title: "Card Type",
        },
      ],
    },
  ],
};
