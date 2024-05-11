import { Post, posts } from "#site/content";
import { MDXContent } from "@/components/mdx-component";

interface Params {
  slug: string[]
}

const findPost = (postName: string) => {
  return posts?.find((post: Post) => post.slugAsParams === postName)
}

const BlogContent = ({params}: {params: Params}) => {
  
  const post = findPost(params?.slug[0])

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl">
      <h1 className="mb-2">{post?.title}</h1>
      {post?.description ? (<p className="text-xl mt-0 text-muted-foreground">{post.description}</p>) : null}
      <hr className="my-4" />
      <MDXContent code={post?.body!!} />
    </article>
  )
}

export default BlogContent;