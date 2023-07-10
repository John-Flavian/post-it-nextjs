import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ message: "Please sign in to post" });
    }

    // Get Auth Users Posts

    try {
      const data = await prisma.user.findUnique({
        where: {
          email: session.user?.email,
        },
        include: {
          Post: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              comment: true,
            },
          },
        },
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: "Error has occured whilst making a post." });
    }
  }
}
