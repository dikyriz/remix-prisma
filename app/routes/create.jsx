import { ActionArgs } from "@remix-run/node"
import { Outlet, useNavigation, Form } from "@remix-run/react";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
// import { redirect, ActionArgs, json, } from "@remix-run/node";
// import { Response, Request } from "@remix-run/node";

export async function action({request}) {
// event.preventDefault();

const form = await request.formData();
const prisma = new PrismaClient();
const create = await prisma.post.create({
  data:{
    title: form.get("judul"),
    content: form.get("konten"),
  }
})
await prisma.$disconnect
return true
// console.log(prisma);

// await prisma.post
//   .create({
//     data: {
//       title: "example",
//       content: "example content",
//     },
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// return console.log(ActionArgs);
// const body = await ActionArgs.formData();
// console.log(body.get("judul"));
// return json({ status: 200 });
// const data = await prisma.post.create({
//   data: {
//     title: body.get("judul"),
//   },
// });
// return data;
// return redirect("/update");
// return redirect("/");
}

export default function Create() {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const navigate = useNavigation();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const prisma = new PrismaClient();

  //   await prisma.post
  //     .create({
  //       data: {
  //         title: Title,
  //         content: Content,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="min-h-screen p-20 flex flex-col items-center ">
      <h1 className="uppercase text-lg font-semibold">create data </h1>
      <Form
        method="post"
        className="flex flex-col w-96 gap-y-6 shadow rounded-lg py-4 px-3 bg-slate-200 mt-4"
      >
        <input
          type="text"
          name="judul"
          placeholder="isikan judul"
          className="py-2 pl-3 rounded-md bg-transparent outline-slate-100 placeholder:uppercase"
        />
        <input
          type="text"
          name="konten"
          placeholder="isikan konten"
          className="py-2 pl-3 rounded-md bg-transparent outline-slate-100 placeholder:uppercase"
        />
        <div>
          <button
            type="submit"
            className="bg-black py-2 px-4 font-semibold text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}
