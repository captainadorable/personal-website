export const getPosts = async () => {
  const posts = []
  await fetch("https://www.captadorable.me/api/post/getPosts").then(response => response.json()).then(data => {
    data.posts.forEach(post => {
      posts.push({
        title: post.title,
        slug: post.slug,
        details: post.details,
        date: post.date
      })
    });
  })
  return posts;
};
