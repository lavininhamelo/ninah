import { NextApiRequest, NextApiResponse } from "next";
import { subscribeEmail } from "services";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method === "POST") {
    try {
      const { email } = req.body;
      const response = await subscribeEmail(email);
      if (response) {
        return res.status(201).json(response);
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}
