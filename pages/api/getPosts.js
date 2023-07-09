import prisma from "../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await prisma.post.findMany({
        include: {
          user: true,
          comment: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res
        .status(403)
        .json({ err: "Error has occured whilst getting the posts." });
    }
  }
}
