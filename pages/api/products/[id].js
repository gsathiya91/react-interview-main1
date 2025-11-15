import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
import fs from "fs";
import path from "path";
import { IncomingForm } from "formidable";

export const config = {
  api: { bodyParser: false }, 
};

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("product-listings");
  const collection = db.collection("gadgets");
  const { id } = req.query;

  if (req.method === "PUT") {
    const form = new IncomingForm();
    form.uploadDir = path.join(process.cwd(), "/public/uploads");
    form.keepExtensions = true;

    if (!fs.existsSync(form.uploadDir)) fs.mkdirSync(form.uploadDir, { recursive: true });

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ message: "Error parsing form", err });

      const updateData = {
        name: fields.name,
        price: Number(fields.price),
        description: fields.description,
      };

      if (files.image) {
        const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
        updateData.image = `/uploads/${path.basename(imageFile.filepath)}`;
      }

      try {
        const result = await collection.updateOne(
          { _id: new ObjectId(id) },
          { $set: updateData }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({ success: true, result });
      } catch (error) {
        console.error("Mongo update error:", error);
        return res.status(500).json({ message: "Error updating product", error });
      }
    });
  } else if (req.method === "DELETE") {
    try {
      const result = await collection.deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount === 0) return res.status(404).json({ message: "Product not found" });
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ message: "Error deleting product", err });
    }
  } else if (req.method === "GET") {
    try {
      const product = await collection.findOne({ _id: new ObjectId(id) });
      if (!product) return res.status(404).json({ message: "Product not found" });
      return res.status(200).json({ product });
    } catch (err) {
      return res.status(500).json({ message: "Error fetching product", err });
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
