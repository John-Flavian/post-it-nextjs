import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ message: "Please sign in to post" });
    }

    console.log(session);
  }
  res.status(200).json({ posts: "John Doe" });
}
