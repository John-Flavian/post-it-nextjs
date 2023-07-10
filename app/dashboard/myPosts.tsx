"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthPostsType } from "../types/AuthPostsTypes";

const fetchAuthPosts = async () => {
  const response = await axios.get("/api/authPost");
  return response.data;
};

export default function MyPosts() {
  const { data, isLoading } = useQuery<AuthPostsType>({
    queryFn: fetchAuthPosts,
    queryKey: ["auth-posts"],
  });

  if (isLoading) return <h1>Posts are loading...</h1>;
  console.log(data);

  return (
    <div>
      <h1>Data</h1>
    </div>
  );
}
