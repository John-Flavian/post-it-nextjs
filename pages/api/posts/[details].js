import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await prisma.post.findUnique({
        where: {
          id: req.query.details,
        },
        include: {
          user: true,
          comment: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              user: true,
            },
          },
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
