import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("product-listings");
        const collection = db.collection("gadgets");

        const products = await collection.find({}).toArray();
 console.log({products});
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
}
