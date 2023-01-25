//dev.to/api/articles/nataliedeweerd/the-power-of-webp-2dlc

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
  
    const articles = await fetch("https://dev.to/api/articles?username=nataliedeweerd").then((res) => res.json());
    return res.status(200).json(articles);
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}
