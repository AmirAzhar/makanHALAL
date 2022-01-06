import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const places = await db.collection("places").find({}).toArray();
  res.json(places);
};
