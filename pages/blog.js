import "tailwindcss/tailwind.css";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Navbar } from "../components/navbar/navbar";
import { NextSeo } from "next-seo";
import { Footer } from "../components/footer/footer";

function Blog({ posts }) {
  return (
    <div>
      <NextSeo title="Blog" />
      <Navbar />
      <div className="grid grid-rows-4 gap-y-16 items-center justify-center pb-24">
        <div className="flex flex-col space-y-4">
          <p className="text-2xl text-center lg:text-4xl lg:pt-12">
            Welcome to my <span className="text-indigo-300">Blog!</span>
          </p>
          <p className="text-lg text-center lg:text-xl">
            Check out my <span className="text-green-200">beautiful</span>{" "}
            blogs!
          </p>
        </div>
        {posts.map((post) => (
          <div key={post.slug} className="flex flex-col items-center space-y-4">
            <span className="self-center text-2xl lg:self-start">
              {post.title}
            </span>
            <div>
              <article className="prose prose-xl text-white text-center px-2 lg:text-left lg:px-0">
                <ReactMarkdown
                  children={`${post.details.default.slice(0, 200)}...`}
                />
              </article>
            </div>
            <div className="flex justify-between w-full pt-8 px-4 lg:px-0">
              <Link href={post.slug}>
                <button className="bg-indigo-600 rounded-lg w-24 h-12 ">
                  Go to post
                </button>
              </Link>
              <span className="self-end text-gray-500">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

Blog.getInitialProps = async () => {
  const res = await fetch(`https://captadorable.vercel.app/api/posts`);
  const json = await res.json();

  return { posts: json.posts };
};

export default Blog;
