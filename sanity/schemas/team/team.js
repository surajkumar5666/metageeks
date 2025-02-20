export const team = {
  name: "team",
  type: "document",
  title: "Team",
  fields: [
    {
      name: "fullName",
      type: "string",
      title: "Full Name",
    },
    {
      name: "position",
      type: "string",
      title: "Position",
    },
    {
      name: "rank",
      type: "number",
      title: "Rank",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
  ],
};
