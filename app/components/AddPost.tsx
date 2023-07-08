"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // Create a Post
  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/posts", { title }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message);
        }
        setIsDisabled(false);
      },
      onSuccess: (data) => {
        toast.success("Post has been made! ");
        setTitle("");
        setIsDisabled(false);
      },
    }
  );

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate(title);
  };

  return (
    <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What's on your mind?"
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
        ></textarea>
      </div>
      <p
        className={`font-bold text-sm ${
          title.length > 300 ? "text-red-700" : "text-gray-700"
        }`}
      >
        {`${title.length}/300`}
      </p>
      <div>
        <button
          disabled={isDisabled}
          className="test-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
          type="submit"
        >
          Create a Post
        </button>
      </div>
    </form>
  );
}
