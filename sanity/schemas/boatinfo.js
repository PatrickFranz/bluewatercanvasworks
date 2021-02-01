export default {
  name: "boatinfo",
  title: "Boat Type",
  type: "object",
  fields: [
    {
      name: "boatName",
      title: "Boat Name",
      type: "string",
    },
    {
      name: "manufacturer",
      title: "Manufacurer",
      type: "string",
    },
    {
      name: "model",
      title: "Model",
      type: "string",
    },
    {
      name: "yearbuilt",
      title: "Year Built",
      type: "date",
      options: {
        dateFormat: "yyyy",
      },
    },
    {
      name: "coverimage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
