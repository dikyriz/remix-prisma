import { Link } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export async function loader() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({});
  return posts;
}

export default function Index() {
  const posts = useLoaderData();
  // console.log(posts);

  return (
    <div className="flex flex-col p-10 h-screen ">
      <div className="w-full">
        <Link
          to={`/create`}
          className="bg-cyan-600 py-2 px-4 text-lg font-semibold text-white rounded-lg"
        >
          Create
        </Link>
        {posts.map((post, index) => (
          <div
            key={index}
            className="my-5 shadow py-2 pl-4 rounded-lg bg-slate-300 flex flex-col gap-y-4"
          >
            <h1>ID: {post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="flex gap-x-2">
              <button className="bg-green-700 py-2 px-4 rounded text-white">
                Update
              </button>
              <button className="bg-red-700 py-2 px-4 rounded text-white">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
