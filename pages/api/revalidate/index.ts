import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (!req.query.action || !req.query.slug) {
    return res.status(400).json({ message: "Missing parameters" });
  }

  try {
    switch (req.query.action) {
      case "post":
        await res.revalidate(`/post/${req.query.slug}`);
        break;
      case "tip":
        await res.revalidate(`/tip/${req.query.slug}`);
        break;
      default:
        return res.status(400).json({ message: "Invalid action" });
    }

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
