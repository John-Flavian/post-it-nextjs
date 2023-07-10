export type AuthPostsType = {
  image: string;
  email: string;
  name: string;
  id: string;
  avatar: string;
  Post: {
    createdAt: string;
    id: string;
    title: string;
    comment?: {
      createdAt: string;
      id: string;
      postId: string;
      title: string;
      userId: string;
    }[];
  }[];
};
