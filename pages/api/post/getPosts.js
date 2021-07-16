import dbConnect from "../../../middleware/mongodb";
import post from "../../../models/Post";

export default async function handler(req, res) {
  if (req.method == "GET") {
    await dbConnect().then(async () => {
      const data = await post.find({});
      if (data) {
        res.json({ succes: true, posts: data.reverse() });
      }
    });
  }
}
