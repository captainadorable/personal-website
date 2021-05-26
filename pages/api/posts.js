import { getPosts } from '../../posts/blog-posts'

const posts = getPosts()

export default (req, res) => {
    res.json({ posts })
}