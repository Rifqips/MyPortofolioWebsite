import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    longDescription: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    techStack: {
      type: [String],
      default: [],
    },

    features: {
      type: [String],
      default: [],
    },

    githubUrl: {
      type: String,
    },

    demoUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project ||
  mongoose.model(
    "Project",
    ProjectSchema
  );

export default Project;