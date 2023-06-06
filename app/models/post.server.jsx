import { Response, Request } from "@remix-run/node";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(Request) {
  const posts = await prisma.post.findMany({});
  return Response.json({ posts });
}
