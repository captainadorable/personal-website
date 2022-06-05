import 'tailwindcss/tailwind.css';
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { Navbar } from '../components/navbar/navbar';
import { NextSeo } from 'next-seo';
import { Footer } from '../components/footer/footer';
import { Page404 } from '../components/404/404';
import { useEffect, useState } from 'react';

const Post = ({ query }) => {
    const [post, setPost] = useState({});
    const [ready, setReady] = useState(false);

    useEffect(async () => {
        try {
            const res = await fetch(`https://www.captadorable.me/api/post/${query.postId}`);
            const json = await res.json();
            setPost(json.post);
            setReady(true);
        } catch (err) {
            console.log(err);
        }
    }, []);
    
    if (ready && post === {})
        return (
            <div>
                <Page404 />
            </div>
        );
    if (ready && post !== {})
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
                                    <ReactMarkdown children={post.details} />
                                </article>
                            </div>
                            <span className="self-end text-gray-500">{post.date}</span>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    else return <></>
};

Post.getInitialProps = async ({ req, query }) => {
  return { query };
};

export default Post;
