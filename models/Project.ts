import mongoose, { Schema } from "mongoose";

const ProjectSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: [String],
      default: [],
    },
  },
  { _id: false }
);

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

    category: {
      type: String,
      required: true,
      enum: ["web", "android", "ios", "mobile", "backend", "fullstack", "design", "other"],
      default: "web",
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

    sections: {
      type: [ProjectSectionSchema],
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
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;