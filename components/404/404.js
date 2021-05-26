import "tailwindcss/tailwind.css";
import Link from "next/link";
import { Navbar } from "../navbar/navbar";
import { NextSeo } from "next-seo";
import { Footer } from "../footer/footer";

export const Page404 = ({ post }) => {
  return (
    <div>
      <NextSeo title="404! Page Not Found!"/>
      <div className="flex flex-col place-content-between space-y-48 lg:space-y-80">
        <Navbar className="" />
        <div className="flex flex-col items-center space-y-4 self-center text-center lg:text-left">
          <p className="text-6xl">404! Sorry :(</p>
          <p className="text-4xl">I couldnt find this page!</p>
          <Link href="/">
            <button className="bg-indigo-600 rounded-lg w-48 h-12">Return to Home Page</button>
          </Link>
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
};

