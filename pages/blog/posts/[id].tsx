import {PostsOrPages} from '@tryghost/content-api'
import { useRouter } from 'next/router'
import { getPosts } from '../../../lib/posts'
import { GetStaticProps } from 'next'
interface IParams  {
  id: string
}

function About() {
  const router = useRouter()

  return <div>About</div>
}


export default About

function isPost(post: PostsOrPages | void): post is PostsOrPages {
  return (post as PostsOrPages).meta !== undefined;
}
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await getPosts()
  var paths
  if(isPost(posts)){
     paths = posts.map((post:any) => ({
      params: { id: post.id },
    }))
  }
  console.log(paths)

  return { paths, fallback: false }

}
export const getStaticProps:GetStaticProps = async ({ params}) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  //const res = await fetch(`https://.../posts/${params.id}`)
  const post = params?.id

  // Pass post data to the page via props
  return { props: { post } }
}