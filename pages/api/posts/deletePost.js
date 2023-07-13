import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ message: "Please sign in to post" });
    }

    // Delete Users Posts

    try {
      const postId = req.body;
      const result = await prisma.post.delete({
        where: {
          id: postId,
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res
        .status(403)
        .json({ err: "Error has occured whilst deleting a post." });
    }
  }
}
