"use client";
import axios from "axios";
import AddPost from "../app/components/AddPost";
import { useQuery } from "@tanstack/react-query";
import Post from "./components/Posts";

//Fetch all posts
const allPosts = async () => {
  const response = await axios.get("/api/getPosts");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],
  });

  if (error) return error;
  if (isLoading) return "loading...";
  console.log(data);
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello main</h1>
      <AddPost />
      {data?.map((post) => (
        <Post
          key={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          id={post.id}
        />
      ))}
    </main>
  );
}
