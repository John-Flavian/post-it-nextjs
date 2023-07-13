import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ message: "Please sign in to post" });
    }

    const title = req.body.title;
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    if (title.length > 300) {
      return res.status(403).json({ message: "Please write a shorter Post." });
    }
    if (!title.length) {
      return res
        .status(403)
        .json({ message: "Please do not leave the message empty." });
    }

    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: prismaUser.id,
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ err: "Error has occured whilst making a post." });
    }
  }
}
