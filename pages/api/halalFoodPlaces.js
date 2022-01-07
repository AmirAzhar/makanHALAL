import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const places = await db
    .collection("places")
    .find({ $and: [{ lat: { $ne: "0" } }, { lng: { $ne: "0" } }] })
    // .limit(20)
    .toArray();
  res.json(places);
};
