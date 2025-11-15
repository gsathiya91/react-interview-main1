import fs from "fs";
import path from "path";
import clientPromise from "../../lib/mongodb";
import { IncomingForm } from "formidable";

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("product-listings");
  const collection = db.collection("gadgets");

  if (req.method === "GET") {
    try {
      const products = await collection.find({}).toArray();
      return res.status(200).json({ products });
    } catch (err) {
      return res.status(500).json({ message: "Error fetching products", error: err });
    }
  } else if (req.method === "POST") {
    const form = new IncomingForm();
    form.uploadDir = path.join(process.cwd(), "/public/uploads");
    form.keepExtensions = true;

    if (!fs.existsSync(form.uploadDir)) fs.mkdirSync(form.uploadDir, { recursive: true });

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ message: "Error parsing form", err });

      const { name, price, description } = fields;
      const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;

      if (!name || !price || !description || !imageFile) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      try {
        const imagePath = `/uploads/${path.basename(imageFile.filepath)}`;
        const result = await collection.insertOne({
          name,
          price: Number(price),
          description,
          image: imagePath,
          createdAt: new Date(),
        });

        return res.status(201).json({ success: true, product: result });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error saving product", error });
      }
    });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
