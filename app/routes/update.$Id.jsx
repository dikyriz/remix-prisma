import { useParams } from "@remix-run/react";

export default function Update() {
  const params = useParams();
  const id = params.Id;

  return (
    <div className="flex h-screen items-center justify-center p-20 flex-col">
      <h1 className="uppercase text-2xl font-semibold">update data</h1>
      <form className="bg-slate-200 py-8 px-4 flex flex-col gap-y-6 rounded-lg w-96 mt-6">
        <input
          type="text"
          className="rounded bg-transparent outline-none border-2 border-slate-100 p-2"
        />
        <input
          type="text"
          className="rounded bg-transparent outline-none border-2 border-slate-100 p-2"
        />
        <div>
          <button className="bg-blue-700 py-2 px-4 rounded text-slate-100">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
