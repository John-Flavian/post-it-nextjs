"use client";
import AddPost from "../app/components/AddPost";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello main</h1>
      <AddPost />
    </main>
  );
}
