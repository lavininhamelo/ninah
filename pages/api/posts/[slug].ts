import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { slug } = req.query;

  if (method === "GET") {
    if (!slug) {
      return res.status(400).json({ message: "Missing slug parameter" });
    }

    try {
      const response = await fetch(`https://dev.to/api/articles/${process.env.DEVTO_USER}/${slug}`).then((res) =>
        res.json()
      );
      if (response) {
        return res.status(200).json(response);
      } else {
        return res.status(404).json({ message: "Article not found" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}
