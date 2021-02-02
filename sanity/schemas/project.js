import { GrProjects as icon } from "react-icons/gr";

export default {
  name: "project",
  title: "Projects",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "tagline",
      title: "Project Tagline",
      type: "string",
    },
    {
      name: "coverimage",
      title: "Cover Image",
      type: "figure",
    },
    {
      name: "boatinfo",
      title: "Boat Information",
      type: "boatinfo",
    },
    {
      name: "description",
      title: "Project Description",
      type: "text",
    },
    {
      name: "carouselImages",
      title: "Project Images",
      type: "array",
      of: [
        {
          type: "figure",
        },
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
  ],
};
