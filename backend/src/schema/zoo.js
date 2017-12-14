import mongoose from "mongoose"

const ZooSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    leg: {
      type: Number,
      required: true
    },
    comment: {
      type: String
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default mongoose.model("Zoo", ZooSchema)
