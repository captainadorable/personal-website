import "tailwindcss/tailwind.css";
import fetch from "isomorphic-unfetch";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Navbar } from "../components/navbar/navbar";
import { NextSeo } from "next-seo";
import { Footer } from "../components/footer/footer";

import { Page404 } from "../components/404/404";

const Post = ({ post }) => {
  if (!post) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }
  return (
    <div>
      <NextSeo title={`${post.title} - Blog`} />
      <Navbar />
      <div className="flex justify-center pt-32 pb-24">
        <div className="flex flex-col justify-center content-center space-y-16 px-8">
          <Link href="/blog">
            <p className="text-2xl text-center cursor-pointer lg:text-4xl">
              ◀️ Back to <span className="text-indigo-300">blog.</span>
            </p>
          </Link>
          <div key={post.slug} className="flex flex-col">
            <Link href={post.slug}>
              <span className="text-2xl pb-2 cursor-pointer">{post.title}</span>
            </Link>
            <div>
              <article className="prose prose-xl text-white">
                <ReactMarkdown children={post.details.default} />
              </article>
            </div>
            <span className="self-end text-gray-500">{post.date}</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Post.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`https://captadorable.vercel.app/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default Post;
