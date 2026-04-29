import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  weight: string;
  mrp: number;
  price: number;
  discount: number;
  image: string;
  tag: string;
  category: string;
  inStock: boolean;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  weight: { type: String, required: true },
  mrp: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  image: { type: String, required: true },
  tag: { type: String },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
