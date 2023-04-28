import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method,  } = req;
  const { slug } = req.query;

  if (method === "GET") {
  
    const articles = await fetch(`https://dev.to/api/articles/${process.env.DEVTO_USER}/${slug}`).then((res) => res.json());
    return res.status(200).json(articles);
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}
