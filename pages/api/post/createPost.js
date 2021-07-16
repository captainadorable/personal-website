import dbConnect from "../../../middleware/mongodb";
import post from "../../../models/Post";
import { getSession } from "next-auth/client";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method == "POST" && session) {
    const data = JSON.parse(req.body);

    await dbConnect().then(async () => {
      const newPost = new post({
        title: data.title,
        slug: data.slug,
        details: data.details,
        date: data.date,
      });
      await newPost.save();
    });
    res.json({ succes: true });
  }
}
