import "./globals.css";
import { Roboto } from "next/font/google";
import Nav from "./auth/Nav";
import QueryWrapper from "./auth/QueryWrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Post It App",
  description: "By John Flavian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 bg-gray-200 ${roboto.variable}`}>
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
