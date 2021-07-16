import { getPosts } from '../../posts/blog-posts'

export default async (req, res) => {
    const posts = await getPosts()
    res.json({ posts })
}