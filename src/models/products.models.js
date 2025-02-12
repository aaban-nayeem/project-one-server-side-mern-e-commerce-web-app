import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true,
    },
    // },
    // description: {
    //   type: String,
    //   required: [true, "Please enter product description"],
    // },
    // price: {
    //   type: Number,
    //   required: [true, "Please enter product price"],
    //   maxlength: [8, "Price cannot exceed 8 characters"],
    // },
    // ratings: {
    //   type: Number,
    //   default: 0,
    // },
    // images: [
    //   {
    //     public_id: {
    //       type: String,
    //       required: true,
    //     },
    //     url: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
    // category: {
    //   type: String,
    //   required: [true, "Please enter product category"],
    // },
    // stock: {
    //   type: Number,
    //   required: [true, "Please enter product stock"],
    //   maxlength: [4, "Stock cannot exceed 4 characters"],
    //   default: 1,
    // },
    // numOfReviews: {
    //   type: Number,
    //   default: 0,
    // },

    // reviews: [
    //   {
    //     name: {
    //       type: String,
    //       required: true,
    //     },
    //     rating: {
    //       type: Number,
    //       required: true,
    //     },
    //     comment: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
  },
  { timestamps: true },
);

const Products = mongoose.model("Products", productsSchema);
export { Products };
