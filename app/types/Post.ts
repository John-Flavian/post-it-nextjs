export type PostType = {
  title: string;
  id: string;
  updatedAt: string;
  createdAt: string;
  published: boolean;
  userId: string;
  user: {
    name: string;
    image: string;
    email: string;
    id: string;
  };
  comment?: {
    createdAt: string;
    id: string;
    postId: string;
    userId: string;
    message: string;
    user: {
      email: string;
      id: string;
      image: string;
      name: string;
    };
  }[];
};

const example = {
  id: "clk2vkhlj0003dm845vxuzxpy",
  createdAt: "2023-07-14T17:50:49.111Z",
  updatedAt: "2023-07-14T17:50:49.111Z",
  title: "Two.",
  published: false,
  userId: "cljvc9b3h0000dmvk9di6ikmp",
  user: {
    id: "cljvc9b3h0000dmvk9di6ikmp",
    name: "John Flavian",
    email: "flavianomeokwe@gmail.com",
    emailVerified: null,
    image:
      "https://lh3.googleusercontent.com/a/AAcHTteQJVx5wWtV_h5CS1MEeJ2Py9vBV5FoWQy017JXIcP6qc8=s96-c",
  },
  comment: [
    {
      id: "clk4aufv80003dmwkpbbt6cm4",
      message: "Add another comment.",
      postId: "clk2vkhlj0003dm845vxuzxpy",
      userId: "cljvc9b3h0000dmvk9di6ikmp",
      createdAt: "2023-07-15T17:46:13.845Z",
      user: {
        id: "cljvc9b3h0000dmvk9di6ikmp",
        name: "John Flavian",
        email: "flavianomeokwe@gmail.com",
        emailVerified: null,
        image:
          "https://lh3.googleusercontent.com/a/AAcHTteQJVx5wWtV_h5CS1MEeJ2Py9vBV5FoWQy017JXIcP6qc8=s96-c",
      },
    },
    {
      id: "clk49iii00001dmwkb499z2cj",
      message: "Test Comment",
      postId: "clk2vkhlj0003dm845vxuzxpy",
      userId: "cljvc9b3h0000dmvk9di6ikmp",
      createdAt: "2023-07-15T17:08:57.760Z",
      user: {
        id: "cljvc9b3h0000dmvk9di6ikmp",
        name: "John Flavian",
        email: "flavianomeokwe@gmail.com",
        emailVerified: null,
        image:
          "https://lh3.googleusercontent.com/a/AAcHTteQJVx5wWtV_h5CS1MEeJ2Py9vBV5FoWQy017JXIcP6qc8=s96-c",
      },
    },
  ],
};
