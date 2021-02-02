export default {
  name: "figure",
  title: "Figure",
  type: "object",
  options: { hotspot: true },
  fields: [
    { name: "image", type: "image" },
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: `Some of your visitors cannot see images, 
    be they blind, color-blind, low-sighted; 
    alt text is of great help for those 
    people that can rely on it to have a good idea of 
    what\'s on your page.`,
      maxLength: 20,
    },
  ],
};
