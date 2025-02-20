export const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "clientName",
      title: "ClientName",
      type: "string",
    },
    {
      name: "review",
      title: "Review",
      type: "string",
    },
    {
      name: "clientOrg",
      title: "ClientOrg",
      type: "string",
    },
    {
      name: "clientImage",
      title: "ClientImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
